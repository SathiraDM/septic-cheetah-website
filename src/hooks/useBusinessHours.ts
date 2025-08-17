import { useState, useEffect } from 'react';
import { format } from 'date-fns';

interface BusinessHours {
  open: number;
  close: number;
}

interface BusinessHoursData {
  [key: number]: BusinessHours | null;
}

export const useBusinessHours = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenTime, setNextOpenTime] = useState<Date | null>(null);
  const [currentStatus, setCurrentStatus] = useState<string>('');

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday

      // Business hours: Monday-Friday 7AM-7PM, Saturday 8AM-5PM, Sunday closed
      const businessHours: BusinessHoursData = {
        1: { open: 7, close: 19 }, // Monday
        2: { open: 7, close: 19 }, // Tuesday
        3: { open: 7, close: 19 }, // Wednesday
        4: { open: 7, close: 19 }, // Thursday
        5: { open: 7, close: 19 }, // Friday
        6: { open: 8, close: 17 }, // Saturday
        0: null // Sunday - closed
      };

      const todayHours = businessHours[currentDay];
      const isCurrentlyOpen = todayHours && 
        currentHour >= todayHours.open && 
        currentHour < todayHours.close;

      setIsOpen(Boolean(isCurrentlyOpen));

      // Set status message
      if (isCurrentlyOpen) {
        const closeTime = new Date();
        closeTime.setHours(todayHours!.close, 0, 0, 0);
        setCurrentStatus(`Open until ${format(closeTime, 'h:mm a')}`);
      } else if (todayHours) {
        if (currentHour < todayHours.open) {
          const openTime = new Date();
          openTime.setHours(todayHours.open, 0, 0, 0);
          setCurrentStatus(`Opens at ${format(openTime, 'h:mm a')}`);
        } else {
          setCurrentStatus('Closed - Emergency service available');
        }
      } else {
        setCurrentStatus('Closed Sunday - Emergency service available');
      }

      // Calculate next open time
      if (!isCurrentlyOpen) {
        const nextOpen = calculateNextOpenTime(now, businessHours);
        setNextOpenTime(nextOpen);
      }
    };

    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return { 
    isOpen, 
    nextOpenTime, 
    currentStatus,
    emergencyAvailable: true // Always available for emergencies
  };
};

const calculateNextOpenTime = (now: Date, businessHours: BusinessHoursData): Date => {
  const nextOpen = new Date(now);
  
  // Find next business day
  for (let i = 1; i <= 7; i++) {
    const checkDay = (now.getDay() + i) % 7;
    const dayHours = businessHours[checkDay];
    
    if (dayHours) {
      nextOpen.setDate(now.getDate() + i);
      nextOpen.setHours(dayHours.open, 0, 0, 0);
      break;
    }
  }
  
  return nextOpen;
};