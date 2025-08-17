import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { name, phone, email, service, urgency } = formData;
    if (!name || !phone || !email || !service || !urgency) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send email notification to business owner
    // 2. Send confirmation email to customer
    // 3. Store lead in database/CRM
    // 4. Trigger any automation workflows

    console.log('New lead received:', {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}