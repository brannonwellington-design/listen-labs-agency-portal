import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyType, participants, panelSource, timeline, incidenceRate, context, agencyName, email, yourName } = await req.json();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    const emailBody = `
New Scope Request from Agency Portal

Name: ${yourName}
Agency Name: ${agencyName}
Email: ${email}
Study Type: ${studyType}
Estimated Participants: ${participants}
Panel Source: ${panelSource}
Estimated Incidence Rate: ${incidenceRate}
Target Timeline: ${timeline}
Additional Context: ${context || 'None provided'}
    `.trim();

    if (RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Agency Portal <noreply@resend.dev>',
          to: ['support@listen.ai'],
          subject: 'New Scope Request from Agency Portal',
          text: emailBody,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.error('Resend error:', errorData);
      }
    } else {
      // Log the request when no email service is configured
      console.log('Scope request received (no email service configured):');
      console.log(emailBody);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing scope request:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
