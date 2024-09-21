import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const API_KEY = process.env.SENDGRID_API_KEY || "";
sgMail.setApiKey(API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, email, text } = req.body;

    const msg = {
      to: "your-email@example.com", // Replace with your email
      from: "noreply@yourdomain.com", // Replace with your verified sender
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${text}
      `,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
