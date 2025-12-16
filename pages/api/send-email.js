// API route for sending emails
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { to, subject, body, from } = req.body

    // Validate required fields
    if (!to || !subject || !body) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(to)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    if (from && !emailRegex.test(from)) {
      return res.status(400).json({ message: 'Invalid from email format' })
    }

    // Validate content length
    if (subject.length > 200 || body.length > 10000) {
      return res.status(400).json({ message: 'Subject or body too long' })
    }

    // Here you would integrate with an email service like SendGrid, AWS SES, etc.
    // For now, just log the email
    console.log('Email to be sent:', { to, subject, from: from || 'noreply@myleadagency.com' })

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: Date.now().toString()
    })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
