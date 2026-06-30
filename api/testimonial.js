const nodemailer = require('nodemailer');
import { formidable } from 'formidable';
import { v2 as cloudinary } from 'cloudinary';

// Disable Vercel's default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const form = formidable({
      maxFileSize: 2 * 1024 * 1024, // 2MB limit
    });
    const [fields, files] = await form.parse(req);

    const { name, role, rating, text, website } = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, value[0]])
    );

    // Honeypot check
    if (website) {
      return res.status(200).json({ ok: true, message: 'Testimonial submitted successfully!' });
    }

    if (!name || !role || !text || !rating) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    let imageUrl = '';
    const imageFile = files.image?.[0];
    if (imageFile) {
      const uploadResult = await cloudinary.uploader.upload(imageFile.filepath, {
        folder: 'portfolio-testimonials',
      });
      imageUrl = uploadResult.secure_url;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: process.env.EMAIL_SERVER_PORT == 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"IFYWIGATECHZ Website" <${process.env.EMAIL_SERVER_USER}>`,
      to: 'wigatech9@gmail.com',
      subject: `New Testimonial Submission (${rating} Stars)`,
      html: `
        <h2>New Testimonial Submission</h2>
        ${imageUrl ? `<p><img src="${imageUrl}" alt="${name}" width="100" style="border-radius: 50%;" /></p>` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Rating:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
        <p><strong>Testimonial:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; margin-left: 0;">${text}</blockquote>
      `,
    });

    return res.status(200).json({ ok: true, message: 'Testimonial submitted successfully!' });
  } catch (error) {
    console.error('API Error:', error);
    if (error.code === 'LIMIT_EXCEEDED' || (error.message && error.message.includes('maxFileSize'))) {
      return res.status(413).json({ error: 'File is too large. Please upload an image under 2MB.' });
    }
    return res.status(500).json({ error: 'An error occurred while submitting your testimonial.' });
  }
}