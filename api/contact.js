const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, service, message } = req.body;

  // 2. Basic validation
  if (!name || !email || !email.includes('@') || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // 3. Configure the email transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.EMAIL_SERVER_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    // 4. Send the email
    await transporter.sendMail({
      from: `"IFYWIGATECHZ Website" <${process.env.EMAIL_SERVER_USER}>`,
      to: 'wigatech9@gmail.com', // Your receiving email address
      replyTo: email, // Set the reply-to to the user's email for easy replies
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 5. Send a success response
    return res.status(200).json({ ok: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
}