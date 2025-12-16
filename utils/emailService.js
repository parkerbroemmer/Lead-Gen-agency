/**
 * Email service utility functions
 * This module provides functions to send emails using various email service providers
 * Configure your email service API keys in environment variables
 */

/**
 * Escape HTML special characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

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
  const safeName = escapeHtml(recipientName)
  const safeCity = escapeHtml(city)
  const subject = `Welcome to My Lead Agency${city ? ` - ${safeCity}` : ''}`
  const body = `
    <h1>Welcome ${safeName}!</h1>
    <p>Thank you for your interest in our lead generation services${city ? ` in ${safeCity}` : ''}.</p>
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
  const safeName = escapeHtml(leadData.name)
  const safeEmail = escapeHtml(leadData.email)
  const safePhone = escapeHtml(leadData.phone)
  const safeCity = escapeHtml(leadData.city)
  const safeMessage = escapeHtml(leadData.message)
  
  const subject = `New Lead: ${safeName}${leadData.city ? ` from ${safeCity}` : ''}`
  const body = `
    <h2>New Lead Submission</h2>
    <ul>
      <li><strong>Name:</strong> ${safeName}</li>
      <li><strong>Email:</strong> ${safeEmail}</li>
      <li><strong>Phone:</strong> ${safePhone}</li>
      ${leadData.city ? `<li><strong>City:</strong> ${safeCity}</li>` : ''}
      ${leadData.message ? `<li><strong>Message:</strong> ${safeMessage}</li>` : ''}
    </ul>
    <p>Submitted at: ${new Date().toLocaleString()}</p>
  `

  return sendEmail({
    to: adminEmail,
    subject,
    body
  })
}
