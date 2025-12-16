/**
 * Email service utility functions
 * This module provides functions to send emails using various email service providers
 * Configure your email service API keys in environment variables
 */

/**
 * Send an email using the configured email service
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.body - Email body (HTML or plain text)
 * @param {string} options.from - Sender email address (optional)
 * @returns {Promise<Object>} Response from email service
 */
export async function sendEmail({ to, subject, body, from }) {
  const emailData = {
    to,
    subject,
    body,
    from: from || process.env.DEFAULT_FROM_EMAIL || 'noreply@myleadagency.com'
  }

  // In production, integrate with SendGrid, AWS SES, Mailgun, etc.
  // Example with SendGrid:
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // await sgMail.send(msg)

  console.log('Sending email:', emailData)
  
  // Simulate email sending
  return {
    success: true,
    messageId: `msg_${Date.now()}`,
    timestamp: new Date().toISOString()
  }
}

/**
 * Send a welcome email to a new lead
 * @param {string} recipientEmail - Lead's email address
 * @param {string} recipientName - Lead's name
 * @param {string} city - City of interest
 * @returns {Promise<Object>} Response from email service
 */
export async function sendWelcomeEmail(recipientEmail, recipientName, city) {
  const subject = `Welcome to My Lead Agency${city ? ` - ${city}` : ''}`
  const body = `
    <h1>Welcome ${recipientName}!</h1>
    <p>Thank you for your interest in our lead generation services${city ? ` in ${city}` : ''}.</p>
    <p>One of our representatives will contact you shortly.</p>
    <p>Best regards,<br>My Lead Agency Team</p>
  `

  return sendEmail({
    to: recipientEmail,
    subject,
    body
  })
}

/**
 * Send a notification email to the admin about a new lead
 * @param {Object} leadData - Lead information
 * @returns {Promise<Object>} Response from email service
 */
export async function sendLeadNotification(leadData) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@myleadagency.com'
  const subject = `New Lead: ${leadData.name}${leadData.city ? ` from ${leadData.city}` : ''}`
  const body = `
    <h2>New Lead Submission</h2>
    <ul>
      <li><strong>Name:</strong> ${leadData.name}</li>
      <li><strong>Email:</strong> ${leadData.email}</li>
      <li><strong>Phone:</strong> ${leadData.phone}</li>
      ${leadData.city ? `<li><strong>City:</strong> ${leadData.city}</li>` : ''}
      ${leadData.message ? `<li><strong>Message:</strong> ${leadData.message}</li>` : ''}
    </ul>
    <p>Submitted at: ${new Date().toLocaleString()}</p>
  `

  return sendEmail({
    to: adminEmail,
    subject,
    body
  })
}
