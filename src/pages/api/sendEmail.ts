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
            .header { display: flex; align-items: center; justify-content: center; padding: 10px 0; border-bottom: 1px solid #eaeaea; }
            .header img { margin-right: 10px; }
            .content { margin: 20px 0; }
            .footer { display: flex; align-items: center; justify-content: center; padding: 10px 0; border-top: 1px solid #eaeaea; font-size: 0.9em; color: #777; }
            .footer img { margin-right: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://girishtiwale.com/favicon.png" alt="Logo" width="32" height="32"/>
              <h2>Contact Form Submission</h2>
            </div>
            <div class="content">
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Message:</p>
              <p>${message}</p>
            </div>
            <div class="footer">
              <img src="https://girishtiwale.com/favicon.ico" alt="Favicon" width="16" height="16"/>
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
            .header { display: flex; align-items: center; justify-content: center; padding: 10px 0; border-bottom: 1px solid #eaeaea; }
            .header img { margin-right: 10px; }
            .content { margin: 20px 0; }
            .footer { display: flex; align-items: center; justify-content: center; padding: 10px 0; border-top: 1px solid #eaeaea; font-size: 0.9em; color: #777; }
            .footer img { margin-right: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://girishtiwale.com/favicon.png" alt="Logo" width="32" height="32"/>
              <h2>Thank You for Contacting Me!</h2>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out to me. I have received your message and will get back to you as soon as possible. I appreciate you taking the time to contact me.</p>
              <p>I am an experienced Full Stack Developer with 2+ years of experience in web application development. I have been developing full stack applications that provide mobile-friendly, responsive and visually appealing UI and robust backend functionalities in the domain of web application development.</p>
              <p>If you have any further questions or need additional information, please do not hesitate to reply to this email. I am always here to assist you and ensure you have the best experience possible.</p>
              <p>Your interest and engagement mean a lot to me. I am committed to providing you with the support you need. Whether it’s a question, feedback, or any other inquiry, I am just an email away.</p>
              <p>Once again, thank you for reaching out. I look forward to connecting with you!</p>
              <br>
              <p>Best regards,
              <br>
              Girish Tiwale
              <br>
              Full Stack Developer
              <br>
              <a href="https://girishtiwale.com">My Portfolio</a>
              </p>
            </div>
            <div class="footer">
              <img src="https://girishtiwale.com/favicon.ico" alt="Favicon" width="16" height="16"/>
              <p>Girish Tiwale</p>
            </div>
          </div>
        </body>
        </html>
      `,
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
