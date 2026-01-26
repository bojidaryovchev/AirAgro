import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  location: z.string().min(3),
  fieldSize: z.string().min(1),
  cropType: z.string().min(2),
  serviceType: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", validatedData);

    // Example with Resend (uncomment when configured):
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: "AirAgro <noreply@yourdomain.com>",
    //   to: ["info@agroair.bg"],
    //   subject: `Ново запитване от ${validatedData.firstName} ${validatedData.lastName}`,
    //   html: `
    //     <h2>Ново запитване за услуга</h2>
    //     <p><strong>Име:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
    //     <p><strong>Имейл:</strong> ${validatedData.email}</p>
    //     <p><strong>Телефон:</strong> ${validatedData.phone}</p>
    //     <p><strong>Локация:</strong> ${validatedData.location}</p>
    //     <p><strong>Площ на имота:</strong> ${validatedData.fieldSize} дка</p>
    //     <p><strong>Тип култура:</strong> ${validatedData.cropType}</p>
    //     <p><strong>Услуга:</strong> ${validatedData.serviceType}</p>
    //     <p><strong>Съобщение:</strong></p>
    //     <p>${validatedData.message}</p>
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: "Формата е изпратена успешно" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Грешка при обработка на формата" },
      { status: 500 }
    );
  }
}
