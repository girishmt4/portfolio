// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (
      !process.env.MY_EMAIL ||
      !process.env.VERIFIED_EMAIL ||
      !process.env.MY_NAME
    ) {
      res
        .status(500)
        .json({ error: "Email environment variables are not set" });
      return;
    }

    const msgToYou = {
      to: process.env.MY_EMAIL, // Your personal email address
      from: process.env.VERIFIED_EMAIL, // Your verified sender email address
      replyTo: email, // User's email address
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { width: 80%; margin: auto; padding: 20px; }
    .header { text-align: center; padding: 10px 0; border-bottom: 1px solid #eaeaea; }
    .content { margin: 20px 0; }
    .footer { text-align: center; padding: 10px 0; border-top: 1px solid #eaeaea; font-size: 0.9em; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>Contact Form Submission</h2></div>
    <div class="content">
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message:</p>
      <p>${message}</p>
    </div>
    <div class="footer">
      <p>Received via girishtiwale.com</p>
    </div>
  </div>
</body>
</html>
      `,
    };

    const msgToUser = {
      to: email, // User's email address
      from: `${process.env.MY_NAME} <${process.env.VERIFIED_EMAIL}>`, // Your verified sender email address
      replyTo: process.env.VERIFIED_EMAIL,
      subject: "Thank you for contacting me!",
      text: "Thank you for contacting me. I will get back to you!",
      html: `
          <html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { width: 80%; margin: auto; padding: 20px; }
    .header { text-align: center; padding: 10px 0; border-bottom: 1px solid #eaeaea; }
    .content { margin: 20px 0; }
    .footer { text-align: center; padding: 10px 0; border-top: 1px solid #eaeaea; font-size: 0.9em; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header"><h2>Thank You for Contacting Me!</h2></div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.</p>
      <p>If you have any further questions, please feel free to reply to this email.</p>
      <br>
      <p>Best regards,</p>
      <p>Girish Tiwale</p>
      <p>Full Stack Developer</p>
      <p><a href="https://girishtiwale.com">Portfolio</a></p>
    </div>
    <div class="footer">
      <p>Girish Tiwale</p>
    </div>
  </div>
</body>
</html>
      `,
      headers: {
        "List-Unsubscribe": "<mailto:unsubscribe@girishtiwale.com>",
      },
    };

    try {
      await sgMail.send(msgToYou);
      await sgMail.send(msgToUser);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
