const mailchimp = require("@mailchimp/mailchimp_marketing");

// Configure Mailchimp client
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g. "us1"
});

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body;

  // 2. Basic validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  // 3. Check for required environment variables
  if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_AUDIENCE_ID) {
    console.error('Mailchimp API Key or Audience ID is not configured.');
    return res.status(500).json({ error: 'Newsletter service is not configured correctly.' });
  }

  try {
    // 4. Add subscriber to Mailchimp list
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });

    // 5. Send a success response
    return res.status(200).json({ message: 'Success! Thanks for subscribing.' });
  } catch (error) {
    console.error('Mailchimp API Error:', error);

    // Handle specific Mailchimp errors
    if (error.response && error.response.body) {
      if (error.response.body.title === "Member Exists") {
        return res.status(400).json({ error: 'This email address is already subscribed.' });
      }
    }

    // Generic error for other issues
    return res.status(500).json({ error: 'An error occurred while subscribing. Please try again.' });
  }
}