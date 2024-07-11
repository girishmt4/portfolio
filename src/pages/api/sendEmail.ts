// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Type guards to ensure environment variables are defined
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
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const msgToUser = {
      to: email, // User's email address
      from: `${process.env.MY_NAME} <${process.env.MY_EMAIL}>`, // Your verified sender email address
      replyTo: process.env.MY_EMAIL,
      subject: "Thank you for contacting me!",
      text: "Thank you for contacting me. I will get back to you!",
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
