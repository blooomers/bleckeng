import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format the email content (plain text version)
    const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Project Type: ${projectType || "Not specified"}

Message:
${message}
    `.trim();

    // Format the email content (HTML version)
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #893002; color: white; padding: 20px; margin-bottom: 30px;">
    <h1 style="margin: 0; font-size: 24px; font-weight: 300;">New Contact Form Submission</h1>
  </div>
  
  <div style="background-color: #f9fafb; padding: 20px; border-left: 4px solid #893002; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #666; width: 120px;">Name:</td>
        <td style="padding: 8px 0; color: #111;">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #666;">Email:</td>
        <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(
          email
        )}" style="color: #893002; text-decoration: none;">${escapeHtml(
      email
    )}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #666;">Phone:</td>
        <td style="padding: 8px 0; color: #111;">${
          phone ? escapeHtml(phone) : "Not provided"
        }</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #666;">Company:</td>
        <td style="padding: 8px 0; color: #111;">${
          company ? escapeHtml(company) : "Not provided"
        }</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: 600; color: #666;">Project Type:</td>
        <td style="padding: 8px 0; color: #111;">${
          projectType ? escapeHtml(projectType) : "Not specified"
        }</td>
      </tr>
    </table>
  </div>
  
  <div style="margin-top: 30px;">
    <h2 style="font-size: 18px; font-weight: 400; color: #111; margin-bottom: 10px;">Message:</h2>
    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 4px; white-space: pre-wrap; color: #111;">${escapeHtml(
      message
    ).replace(/\n/g, "<br>")}</div>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666; text-align: center;">
    <p style="margin: 0;">This email was sent from the Bleck Engineering contact form.</p>
    <p style="margin: 5px 0 0 0;">You can reply directly to this email to respond to ${escapeHtml(
      name
    )}.</p>
  </div>
</body>
</html>
    `.trim();

    // Use the verified domain contact.bleckeng.com for sending
    // IMPORTANT: Must use contact.bleckeng.com (verified subdomain), not bleckeng.com
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "noreply@contact.bleckeng.com";

    // Ensure we're using the verified subdomain
    if (!fromEmail.includes("@contact.bleckeng.com")) {
      console.warn(
        `Warning: fromEmail ${fromEmail} doesn't use verified domain contact.bleckeng.com`
      );
    }

    const toEmail = process.env.RESEND_TO_EMAIL || "mbleck@bleckeng.com";

    console.log(`Sending email from: ${fromEmail}, to: ${toEmail}`);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
