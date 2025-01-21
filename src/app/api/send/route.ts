/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
      const { name, email, message } = await request.json();
  
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@elkajamhamza.me>', // Replace with your verified domain
        to: ['hamza.kajam@gmail.com'], // Your email address
        subject: "New Contact Form Submission",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #4A90E2; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px;"><strong style="color: #555;">Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px;"><strong style="color: #555;">Email:</strong> ${email}</p>
              <p style="margin: 0;"><strong style="color: #555;">Message:</strong></p>
              <div style="background-color: #fff; padding: 10px; border: 1px solid #e0e0e0; border-radius: 4px; margin-top: 10px;">
                <p style="margin: 0;">${message}</p>
              </div>
            </div>
            <p style="font-size: 14px; color: #777; text-align: center;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        `,
      });
  
      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
  
      return NextResponse.json({ data });
    } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }