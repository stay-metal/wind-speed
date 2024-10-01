import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  const API_KEY = process.env.SENDGRID_API_KEY || "";
  if (!API_KEY) {
    console.error("SendGrid API key is missing.");
    return NextResponse.json(
      { error: "SendGrid API key is missing" },
      { status: 500 }
    );
  }
  sgMail.setApiKey(API_KEY);
  console.log("SendGrid API Key:", API_KEY);

  try {
    const { name, phone, email, text } = await request.json();
    console.log("Received data:", { name, phone, email, text });

    const msg = {
      to: "kittenDread@gmail.com",
      from: "vadlambrianov@gmail.com", // Replace with your verified sender
      subject: "WindSpeed.com: Запрос обратной связи",
      text: `
        Имя: ${name}
        Телефон: ${phone}
        Email: ${email}
        Текст сообщения: ${text}
      `,
    };

    console.log("Sending email with message:", msg);
    await sgMail.send(msg);
    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
