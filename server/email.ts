import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendNewsletterSubscriptionNotification(email: string): Promise<void> {
  try {
    const result = await resend.emails.send({
      from: 'noreply@harmony432.es',
      to: process.env.NEWSLETTER_NOTIFICATION_EMAIL || 'thejb2014@gmail.com',
      subject: `Nueva suscripción a newsletter: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Nueva Suscripción a Newsletter</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Este es un email automático de Harmony432. No responda a este mensaje.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error('[Email] Failed to send notification:', result.error);
      throw new Error(`Failed to send email: ${result.error.message}`);
    }

    console.log('[Email] Notification sent successfully:', result.data?.id);
  } catch (error) {
    console.error('[Email] Error sending newsletter notification:', error);
    throw error;
  }
}
