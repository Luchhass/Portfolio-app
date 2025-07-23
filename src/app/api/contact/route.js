import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phoneNumber, message } =
      await request.json();

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // .env.local dosyasında tanımla
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    // Modern email template
    const emailTemplate = `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio İletişim</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #10b981, #059669); padding: 32px 24px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.025em;">
              Yeni İletişim Formu Mesajı
            </h1>
            <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
              Portfolio contact formundan yeni bir mesaj aldınız
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 32px 24px;">
            
            <!-- Sender Info Card -->
            <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; margin-bottom: 24px; border-left: 4px solid #10b981;">
              <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600;">
                Gönderen Bilgileri
              </h3>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 24px; color: white; font-size: 12px; margin-right: 12px;">👤</span>
                  <div>
                    <strong style="color: #374151; font-weight: 600;">Ad Soyad:</strong>
                    <span style="color: #6b7280; margin-left: 8px;">${firstName} ${lastName}</span>
                  </div>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 24px; color: white; font-size: 12px; margin-right: 12px;">✉️</span>
                  <div>
                    <strong style="color: #374151; font-weight: 600;">Email:</strong>
                    <a href="mailto:${email}" style="color: #10b981; text-decoration: none; margin-left: 8px; font-weight: 500;">${email}</a>
                  </div>
                </div>
                <div style="display: flex; align-items: center;">
                  <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 24px; color: white; font-size: 12px; margin-right: 12px;">📞</span>
                  <div>
                    <strong style="color: #374151; font-weight: 600;">Telefon:</strong>
                    <span style="color: #6b7280; margin-left: 8px;">${
                      phoneNumber || "Belirtilmemiş"
                    }</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Message Card -->
            <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 24px; border-left: 4px solid #10b981;">
              <h3 style="margin: 0 0 16px 0; color: #1e293b; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                <span style="display: inline-block; width: 24px; height: 24px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 24px; color: white; font-size: 12px; margin-right: 12px;">💬</span>
                Mesaj İçeriği
              </h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; border-left: 3px solid #10b981;">
                <p style="margin: 0; line-height: 1.7; color: #374151; font-size: 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Action Button -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}" 
                 style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3); transition: all 0.2s ease;">
                💬 Mesajı Yanıtla
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; color: #9ca3af; font-size: 14px; line-height: 1.5;">
              Bu mesaj portfolio contact formundan otomatik olarak gönderilmiştir.<br>
              <span style="color: #6b7280;">Gönderim zamanı: ${new Date().toLocaleString(
                "tr-TR"
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
              padding: 20px 16px !important;
            }
            .header {
              padding: 24px 16px !important;
            }
            .card {
              padding: 16px !important;
            }
          }
        </style>
      </body>
      </html>
    `;

    // Mail içeriği
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_USER, // Mesajların geleceği email
      replyTo: email, // Yanıtlamalarda bu email kullanılacak
      subject: `🔔 Portfolio İletişim - ${firstName} ${lastName}`,
      html: emailTemplate,
      // Text version for email clients that don't support HTML
      text: `
Yeni İletişim Formu Mesajı

Gönderen: ${firstName} ${lastName}
Email: ${email}
Telefon: ${phoneNumber || "Belirtilmemiş"}

Mesaj:
${message}

---
Bu mesaj portfolio contact formundan gönderilmiştir.
Gönderim zamanı: ${new Date().toLocaleString("tr-TR")}
      `.trim(),
    };

    // Mail gönder
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
