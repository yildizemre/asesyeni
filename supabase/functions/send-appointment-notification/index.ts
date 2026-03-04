import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AppointmentData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredDate: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const appointmentData: AppointmentData = await req.json();

    const fullName = `${appointmentData.firstName} ${appointmentData.lastName}`;
    const formattedDate = appointmentData.preferredDate
      ? new Date(appointmentData.preferredDate).toLocaleString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      : 'Belirtilmedi';

    const emailBody = `
Yeni Randevu Talebi

İsim Soyisim: ${fullName}
Telefon: ${appointmentData.phone}
Email: ${appointmentData.email}
Tercih Edilen Tarih/Saat: ${formattedDate}

Mesaj:
${appointmentData.message || 'Mesaj yok'}

---
Bu email otomatik olarak gönderilmiştir.
    `.trim();

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "Ases İşitme <onboarding@resend.dev>",
        to: ["daricaasesisitme@gmail.com"],
        subject: `Yeni Randevu Talebi - ${fullName}`,
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Email gönderimi başarısız:", errorData);

      return new Response(
        JSON.stringify({
          success: false,
          error: "Email gönderilemedi",
          details: errorData
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailResult = await emailResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email başarıyla gönderildi",
        emailId: emailResult.id
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error("Hata:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
