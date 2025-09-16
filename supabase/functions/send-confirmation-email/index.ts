import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  confirmationUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, confirmationUrl }: EmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Dr. Carbone <onboarding@resend.dev>",
      to: [email],
      subject: "Confirm your email - Dr. Carbone Mental Health Services",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2c5530; margin-bottom: 10px;">Welcome to Dr. Carbone's Mental Health Platform</h1>
            <p style="color: #666; font-size: 16px;">Please confirm your email address to complete your registration</p>
          </div>
          
          <div style="background-color: #f8fdf9; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #2c5530; margin-bottom: 15px;">Confirm Your Email Address</h2>
            <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">
              Thank you for signing up! To complete your registration and access our mental health seminars and resources, 
              please click the button below to confirm your email address.
            </p>
            
            <div style="text-align: center;">
              <a href="${confirmationUrl}" 
                 style="background-color: #2c5530; color: white; padding: 15px 30px; text-decoration: none; 
                        border-radius: 5px; display: inline-block; font-weight: bold; font-size: 16px;">
                Confirm Email Address
              </a>
            </div>
          </div>
          
          <div style="background-color: #fff; border: 1px solid #e5e5e5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #2c5530; margin-bottom: 10px;">What's Next?</h3>
            <p style="color: #666; margin-bottom: 15px;">Once confirmed, you'll have access to:</p>
            <ul style="color: #666; line-height: 1.6;">
              <li>Evidence-based mental health seminars</li>
              <li>Professional development resources</li>
              <li>Workplace mental health training</li>
              <li>Expert guidance and support</li>
            </ul>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 1px solid #e5e5e5;">
            <p style="color: #999; font-size: 14px; margin-bottom: 10px;">
              If you didn't create an account, you can safely ignore this email.
            </p>
            <p style="color: #999; font-size: 14px;">
              Questions? Contact us at support@drcarbone.com
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);