// app/api/send-application/route.ts
import nodemailer from 'nodemailer';

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, phone, experience, jobTitle, companyName } = body;

  if (!fullName || !email || !phone || !experience || !jobTitle || !companyName) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  try {
    // Step 1: Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    // Step 2: Email content
    const mailOptions = {
      from: `"Namfam Job Portal" <${process.env.NEXT_PUBLIC_GMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
      subject: `New Job Application: ${jobTitle} at ${companyName}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Job:</strong> ${jobTitle} at ${companyName}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong><br/>${experience}</p>
      `,
    };

    // Step 3: Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email sending failed:', err);
    return new Response(JSON.stringify({ error: 'Email failed to send' }), { status: 500 });
  }
}
