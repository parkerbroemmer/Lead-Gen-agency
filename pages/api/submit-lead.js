// API route for submitting leads
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, city, message } = req.body

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Here you would integrate with your email service or CRM
    // For now, just log the lead
    console.log('New lead submitted:', { name, email, phone, city, message })

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Lead submitted successfully',
      leadId: Date.now().toString()
    })
  } catch (error) {
    console.error('Error submitting lead:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
