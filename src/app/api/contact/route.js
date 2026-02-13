import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

export async function POST(request) {
  try {
    const { name, email, mobile, website, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'Infodigisunny@gmail.com', // Your email address
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${mobile || 'Not provided'}
        Website: ${website || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; border-left: 4px solid #4CAF50;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
            <p><strong>Phone:</strong> ${mobile || 'Not provided'}</p>
            <p><strong>Website:</strong> ${website ? `<a href="${website.startsWith('http') ? website : 'https://' + website}" target="_blank" style="color: #0066cc; text-decoration: none;">${website}</a>` : 'Not provided'}</p>
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee;">
              <p><strong>Message:</strong></p>
              <div style="background: #fff; padding: 15px; border-radius: 4px; border: 1px solid #eee; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 0.9em; color: #666;">
            This email was sent from your website's contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
