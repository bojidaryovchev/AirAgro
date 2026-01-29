import { contactFormSchema, serviceNames } from "@/lib/schemas/contact";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Send email using Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured. Email will not be sent.");
      console.log("Contact form submission:", validatedData);
    } else {
      await resend.emails.send({
        from: "AirAgro <onboarding@resend.dev>", // Use verified domain in production
        to: ["contact.airagro@gmail.com"],
        replyTo: validatedData.email,
        subject: `Ново запитване от ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #2d5f2e 0%, #4a8f4c 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; }
                .label { font-weight: bold; color: #2d5f2e; }
                .value { margin-top: 5px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2 style="margin: 0;">🚁 Ново запитване за услуга</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Име:</div>
                    <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Имейл:</div>
                    <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Телефон:</div>
                    <div class="value"><a href="tel:${validatedData.phone}">${validatedData.phone}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Локация:</div>
                    <div class="value">${validatedData.location}</div>
                  </div>
                  <div class="field">
                    <div class="label">Площ на имота:</div>
                    <div class="value">${validatedData.fieldSize} дка</div>
                  </div>
                  <div class="field">
                    <div class="label">Тип култура:</div>
                    <div class="value">${validatedData.cropType}</div>
                  </div>
                  <div class="field">
                    <div class="label">Услуга:</div>
                    <div class="value">${serviceNames[validatedData.serviceType] || validatedData.serviceType}</div>
                  </div>
                  <div class="field">
                    <div class="label">Съобщение:</div>
                    <div class="value">${validatedData.message.replace(/\n/g, "<br>")}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Формата е изпратена успешно" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }

    console.error("Contact form error:", error);
    return NextResponse.json({ success: false, message: "Грешка при обработка на формата" }, { status: 500 });
  }
}
