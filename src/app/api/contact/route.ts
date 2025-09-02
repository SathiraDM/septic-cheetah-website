import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';
import { CONTACT_INFO } from '@/lib/constants';

// Validate required environment variables
if (!process.env.MAILJET_API_KEY) {
  throw new Error('MAILJET_API_KEY environment variable is required');
}
if (!process.env.MAILJET_SECRET_KEY) {
  throw new Error('MAILJET_SECRET_KEY environment variable is required');
}
if (!process.env.MAILJET_FROM_EMAIL) {
  throw new Error('MAILJET_FROM_EMAIL environment variable is required');
}
if (!process.env.MAILJET_TO_EMAIL) {
  throw new Error('MAILJET_TO_EMAIL environment variable is required');
}

// Initialize Mailjet client
const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
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
  console.log('[EMAIL] Preparing notification email to business...');
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
            <div class="value">${phone || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Address:</div>
            <div class="value">${email || 'Not provided'}</div>
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
              <li>Call the customer as soon as possible</li>
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

  const emailData = {
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_FROM_EMAIL,
          Name: 'Septic Cheetah Website'
        },
        To: [
          {
            Email: process.env.MAILJET_TO_EMAIL,
            Name: 'Septic Cheetah Team'
          }
        ],
        Subject: `New ${urgency === 'emergency' ? 'EMERGENCY' : 'Contact'} Request from ${name}`,
        HTMLPart: htmlContent,
        TextPart: `
New Contact Form Submission

Customer: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Service: ${getServiceLabel(service)}
Urgency: ${getUrgencyLabel(urgency)}
${message ? `Message: ${message}` : ''}

Please contact the customer as soon as possible.
        `.trim()
      }
    ]
  };

  console.log('[EMAIL] Notification email payload:', {
    to: emailData.Messages[0].To[0].Email,
    from: emailData.Messages[0].From.Email,
    subject: emailData.Messages[0].Subject
  });

  try {
    const request = mailjet.post('send', { version: 'v3.1' }).request(emailData);
    const result = await request;
    console.log('[EMAIL] Notification email sent successfully:', {
      status: result.response?.status,
      statusText: result.response?.statusText
    });
    return result;
  } catch (error) {
    console.error('[EMAIL] Failed to send notification email:', error);
    throw error;
  }
}

async function sendConfirmationEmail(formData: ContactFormData) {
  console.log('[EMAIL] Preparing confirmation email to customer...');
  const { name, email, service, urgency } = formData;

  if (!email) {
    console.log('[EMAIL] No email provided for confirmation email');
    return;
  }

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
            <p><strong>We'll call you soon</strong> to discuss your ${getServiceLabel(service)} needs.</p>
            <p>Your request has been marked as: <strong>${getUrgencyLabel(urgency)}</strong></p>
          </div>
          
          <div class="contact-info">
            <h3>Need immediate assistance?</h3>
            <p><strong>Emergency Hotline:</strong> <a href="tel:${CONTACT_INFO.phone.replace(/[^\d]/g, '')}">${CONTACT_INFO.phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${CONTACT_INFO.email}">${CONTACT_INFO.email}</a></p>
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

  const emailData = {
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_FROM_EMAIL,
          Name: 'Septic Cheetah'
        },
        To: [
          {
            Email: email,
            Name: name
          }
        ],
        Subject: 'Thank you for contacting Septic Cheetah!',
        HTMLPart: htmlContent,
        TextPart: `
Thank you, ${name}!

We've received your request for ${getServiceLabel(service)} and will call you soon.

Your request urgency: ${getUrgencyLabel(urgency)}

For immediate assistance, call our emergency hotline: ${CONTACT_INFO.phone}

Thank you for choosing Septic Cheetah!
        `.trim()
      }
    ]
  };

  console.log('[EMAIL] Confirmation email payload:', {
    to: emailData.Messages[0].To[0].Email,
    from: emailData.Messages[0].From.Email,
    subject: emailData.Messages[0].Subject
  });

  try {
    const request = mailjet.post('send', { version: 'v3.1' }).request(emailData);
    const result = await request;
    console.log('[EMAIL] Confirmation email sent successfully:', {
      status: result.response?.status,
      statusText: result.response?.statusText
    });
    return result;
  } catch (error) {
    console.error('[EMAIL] Failed to send confirmation email:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  console.log('[API] Contact form API called at:', new Date().toISOString());
  
  try {
    const formData: ContactFormData = await request.json();
    console.log('[API] Form data received:', {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      urgency: formData.urgency,
      hasMessage: !!formData.message
    });

    // Validate required fields - match frontend validation (either phone OR email required)
    const { name, phone, email, service, urgency } = formData;
    
    if (!name?.trim()) {
      console.error('[API] Missing or empty name field');
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!service) {
      console.error('[API] Missing service field');
      return NextResponse.json(
        { error: 'Service selection is required' },
        { status: 400 }
      );
    }

    if (!urgency) {
      console.error('[API] Missing urgency field');
      return NextResponse.json(
        { error: 'Urgency selection is required' },
        { status: 400 }
      );
    }

    // Require either phone or email (matching frontend logic)
    if (!phone && !email) {
      console.error('[API] No contact method provided');
      return NextResponse.json(
        { error: 'Please provide either a phone number or email address' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error('[API] Invalid email format:', email);
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // Validate phone format if provided
    if (phone) {
      const phoneDigits = phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        console.error('[API] Invalid phone number:', phone);
        return NextResponse.json(
          { error: 'Please provide a valid 10-digit phone number' },
          { status: 400 }
        );
      }
    }

    // Check Mailjet configuration
    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const fromEmail = process.env.MAILJET_FROM_EMAIL;
    const toEmail = process.env.MAILJET_TO_EMAIL;

    console.log('[API] Mailjet configuration check:', {
      hasApiKey: !!apiKey,
      hasSecretKey: !!secretKey,
      fromEmail: fromEmail,
      toEmail: toEmail,
      apiKeyLength: apiKey?.length || 0,
      secretKeyLength: secretKey?.length || 0
    });

    // These should all be present due to validation at module load, but double-check
    if (!apiKey || !secretKey || !fromEmail || !toEmail) {
      console.error('[API] Missing Mailjet credentials');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Log the lead
    console.log('[API] New lead validated:', {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form'
    });

    // Send emails
    console.log('[API] Starting email sending process...');
    
    try {
      const emailPromises = [];
      
      // Always send notification email to business
      console.log('[API] Sending notification email to business...');
      emailPromises.push(sendNotificationEmail(formData));

      // Only send confirmation email if customer provided email
      if (email) {
        console.log('[API] Sending confirmation email to customer...');
        emailPromises.push(sendConfirmationEmail(formData));
      } else {
        console.log('[API] No email provided by customer, skipping confirmation email (phone-only contact)');
      }

      await Promise.all(emailPromises);
      console.log('[API] All emails sent successfully for lead:', name);

    } catch (emailError) {
      console.error('[API] Email sending failed:', {
        error: emailError,
        errorMessage: emailError instanceof Error ? emailError.message : 'Unknown error',
        errorStack: emailError instanceof Error ? emailError.stack : undefined,
        formData: { name, phone, email }
      });
      
      // Log more details about the Mailjet error
      if (emailError && typeof emailError === 'object') {
        console.error('[API] Mailjet error details:', {
          statusCode: (emailError as { statusCode?: number }).statusCode,
          response: (emailError as { response?: unknown }).response,
          body: (emailError as { body?: unknown }).body
        });
      }
      
      // Don't fail the entire request if emails fail
      // The form submission should still be considered successful
      console.log('[API] Continuing despite email failure - form submission recorded');
    }

    const responseMessage = email 
      ? 'Form submitted successfully. You will receive a confirmation email shortly.'
      : 'Form submitted successfully. We will contact you at the phone number provided.';

    console.log('[API] Contact form processing completed successfully');
    return NextResponse.json({
      success: true,
      message: responseMessage
    });

  } catch (error) {
    console.error('[API] Contact form processing error:', {
      error: error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
