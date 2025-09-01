import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

// Initialize Mailjet client
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_SECRET_KEY || ''
);

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  message?: string;
}

const getUrgencyLabel = (urgency: string): string => {
  switch (urgency) {
    case 'emergency':
      return 'Emergency (ASAP)';
    case 'soon':
      return 'Within a few days';
    case 'scheduled':
      return 'Schedule for later';
    default:
      return urgency;
  }
};

const getServiceLabel = (service: string): string => {
  switch (service) {
    case 'pumping':
      return 'Septic Pumping/Cleaning';
    case 'installation':
      return 'New Installation';
    case 'repairs':
      return 'Emergency Repairs';
    case 'maintenance':
      return 'Maintenance/Inspection';
    case 'other':
      return 'Other/Not Sure';
    default:
      return service;
  }
};

async function sendNotificationEmail(formData: ContactFormData) {
  const { name, phone, email, service, urgency, message } = formData;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission - Septic Cheetah</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #3B82F6; }
        .urgent { border-left-color: #EF4444 !important; background: #FEF2F2 !important; }
        .footer { margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 4px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>A new customer has submitted a contact form on your website.</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Customer Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">Phone Number:</div>
            <div class="value">${phone}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">Service Requested:</div>
            <div class="value">${getServiceLabel(service)}</div>
          </div>
          
          <div class="field">
            <div class="label">Urgency Level:</div>
            <div class="value ${urgency === 'emergency' ? 'urgent' : ''}">${getUrgencyLabel(urgency)}</div>
          </div>
          
          ${message ? `
          <div class="field">
            <div class="label">Additional Message:</div>
            <div class="value">${message}</div>
          </div>
          ` : ''}
          
          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>Call the customer within 2 hours during business hours</li>
              <li>Send a confirmation email if needed</li>
              <li>Schedule the service appointment</li>
            </ul>
            <p><em>This email was automatically generated from your website contact form.</em></p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_FROM_EMAIL || 'noreply@septiccheetah.com',
          Name: 'Septic Cheetah Website'
        },
        To: [
          {
            Email: process.env.MAILJET_TO_EMAIL || 'info@septiccheetah.com',
            Name: 'Septic Cheetah Team'
          }
        ],
        Subject: `New ${urgency === 'emergency' ? 'EMERGENCY' : 'Contact'} Request from ${name}`,
        HTMLPart: htmlContent,
        TextPart: `
New Contact Form Submission

Customer: ${name}
Phone: ${phone}
Email: ${email}
Service: ${getServiceLabel(service)}
Urgency: ${getUrgencyLabel(urgency)}
${message ? `Message: ${message}` : ''}

Please contact the customer within 2 hours during business hours.
        `.trim()
      }
    ]
  });

  return request;
}

async function sendConfirmationEmail(formData: ContactFormData) {
  const { name, email, service, urgency } = formData;
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Septic Cheetah</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10B981, #3B82F6); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
        .highlight { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10B981; }
        .contact-info { background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .footer { margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 4px; font-size: 12px; color: #666; text-align: center; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${name}!</h1>
          <p>We've received your request for ${getServiceLabel(service)}</p>
        </div>
        
        <div class="content">
          <div class="highlight">
            <h2>What happens next?</h2>
            <p><strong>We'll call you within 2 hours</strong> during business hours to discuss your ${getServiceLabel(service)} needs.</p>
            <p>Your request has been marked as: <strong>${getUrgencyLabel(urgency)}</strong></p>
          </div>
          
          <div class="contact-info">
            <h3>Need immediate assistance?</h3>
            <p><strong>Emergency Hotline:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@septiccheetah.com">info@septiccheetah.com</a></p>
          </div>
          
          <p>Thank you for choosing Septic Cheetah for your septic system needs. We're committed to providing fast, reliable, and professional service.</p>
          
          <div class="footer">
            <p>This is an automated confirmation email. Please don't reply to this email.</p>
            <p>&copy; 2025 Septic Cheetah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_FROM_EMAIL || 'noreply@septiccheetah.com',
          Name: 'Septic Cheetah'
        },
        To: [
          {
            Email: email,
            Name: name
          }
        ],
        Subject: 'Thank you for contacting Septic Cheetah - We\'ll call you soon!',
        HTMLPart: htmlContent,
        TextPart: `
Thank you, ${name}!

We've received your request for ${getServiceLabel(service)} and will call you within 2 hours during business hours.

Your request urgency: ${getUrgencyLabel(urgency)}

For immediate assistance, call our emergency hotline: (123) 456-7890

Thank you for choosing Septic Cheetah!
        `.trim()
      }
    ]
  });

  return request;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Validate required fields
    const { name, phone, email, service, urgency } = formData;
    if (!name || !phone || !email || !service || !urgency) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the lead
    console.log('New lead received:', {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    });

    // Send emails in parallel
    try {
      await Promise.all([
        sendNotificationEmail(formData),
        sendConfirmationEmail(formData)
      ]);
      
      console.log('Emails sent successfully for lead:', name);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the entire request if emails fail
      // The form submission should still be considered successful
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully. You will receive a confirmation email shortly.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}