import { Resend } from "resend";
import { NextResponse } from "next/server";
import react from "@heroicons/react";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  const { email, subject, message } = body;
  try {
    const date = await resend.emails.send({
      from: fromEmail,
      to: ["2021hyhk@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
