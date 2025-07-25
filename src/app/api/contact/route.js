import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phoneNumber, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Contact Message</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); overflow: hidden; border: 1px solid #e0e0e0;">
          
          <!-- Header -->
          <div style="background-color: #ffffff; padding: 32px 32px 24px 32px; border-bottom: 3px solid #ff8243;">
            <h1 style="margin: 0; color: #2c2c2c; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
              New Contact Message
            </h1>
            <p style="margin: 8px 0 0 0; color: #666666; font-size: 16px; line-height: 1.5;">
              You have received a new message from your portfolio contact form.
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 32px;">
            
            <!-- Sender Info -->
            <div style="background-color: #fafafa; border: 1px solid #e8e8e8; border-radius: 6px; padding: 24px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 20px 0; color: #2c2c2c; font-size: 18px; font-weight: 600; border-bottom: 2px solid #ff8243; padding-bottom: 8px; display: inline-block;">
                Contact Information
              </h3>
              <div style="display: grid; gap: 16px;">
                <div style="display: flex; padding: 8px 0;">
                  <div style="min-width: 80px;">
                    <strong style="color: #555555; font-weight: 600; font-size: 14px;">Name:</strong>
                  </div>
                  <div style="color: #2c2c2c; font-size: 16px; font-weight: 500;">
                    ${firstName} ${lastName}
                  </div>
                </div>
                <div style="display: flex; padding: 8px 0;">
                  <div style="min-width: 80px;">
                    <strong style="color: #555555; font-weight: 600; font-size: 14px;">Email:</strong>
                  </div>
                  <div>
                    <a href="mailto:${email}" style="color: #ff8243; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                  </div>
                </div>
                <div style="display: flex; padding: 8px 0;">
                  <div style="min-width: 80px;">
                    <strong style="color: #555555; font-weight: 600; font-size: 14px;">Phone:</strong>
                  </div>
                  <div style="color: #2c2c2c; font-size: 16px;">
                    ${phoneNumber || "Not provided"}
                  </div>
                </div>
              </div>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 32px;">
              <h3 style="margin: 0 0 16px 0; color: #2c2c2c; font-size: 18px; font-weight: 600; border-bottom: 2px solid #ff8243; padding-bottom: 8px; display: inline-block;">
                Message
              </h3>
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-left: 4px solid #ff8243; padding: 20px; border-radius: 4px; max-height: 200px; overflow-y: auto;" class="message-content">
                <p style="margin: 0; line-height: 1.7; color: #444444; font-size: 16px; white-space: pre-wrap; word-wrap: break-word; overflow-wrap: break-word;">${message}</p>
              </div>
            </div>

            <!-- Action Button -->
            <div style="text-align: center; padding: 20px 0;">
              <a href="mailto:${email}" 
                 style="display: inline-block; background-color: #ff8243; color: #ffffff; text-decoration: none; padding: 12px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 8px rgba(255, 130, 67, 0.3); transition: all 0.2s ease;">
                Reply to Message
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f8f8; padding: 24px 32px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="margin: 0; color: #888888; font-size: 14px; line-height: 1.6;">
              <strong style="color: #2c2c2c;">Furkan Cosar Portfolio</strong><br>
              This message was automatically sent from your contact form.<br>
              <span style="color: #aaaaaa;">Received: ${new Date().toLocaleString(
                "en-US"
              )}</span>
            </p>
          </div>
        </div>

        <!-- Mobile Responsive Styles -->
        <style>
          @media only screen and (max-width: 600px) {
            .container {
              margin: 20px 10px !important;
            }
            .content {
              padding: 24px 20px !important;
            }
            .header {
              padding: 24px 20px !important;
            }
            h1 {
              font-size: 22px !important;
            }
            h3 {
              font-size: 16px !important;
            }
          }
          
          /* Message scroll styling */
          .message-content::-webkit-scrollbar {
            width: 6px;
          }
          .message-content::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          .message-content::-webkit-scrollbar-thumb {
            background: #ff8243;
            border-radius: 3px;
          }
          .message-content::-webkit-scrollbar-thumb:hover {
            background: #e6722a;
          }
        </style>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message - ${firstName} ${lastName}`,
      html: emailTemplate,
      text: `
New Contact Form Message

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber || "Not provided"}

Message:
${message}

---
This message was sent from your portfolio contact form.
Received: ${new Date().toLocaleString("en-US")}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "message sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json(
      {
        success: false,
        message: "message could not be sent",
      },
      { status: 500 }
    );
  }
}
