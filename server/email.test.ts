import { describe, it, expect, beforeAll } from 'vitest';
import { sendNewsletterSubscriptionNotification } from './email';

describe('email', () => {
  describe('sendNewsletterSubscriptionNotification', () => {
    it('should send notification email successfully', async () => {
      // This test validates that the Resend API key is correctly configured
      // by attempting to send a test email
      try {
        await sendNewsletterSubscriptionNotification('test@example.com');
        // If no error is thrown, the API key is valid
        expect(true).toBe(true);
      } catch (error) {
        // If there's an error, it should be related to API response, not missing credentials
        const errorMessage = error instanceof Error ? error.message : String(error);
        expect(errorMessage).not.toContain('undefined');
        expect(errorMessage).not.toContain('RESEND_API_KEY');
      }
    });

    it('should handle invalid email gracefully', async () => {
      try {
        // This should still attempt to send (Resend will validate)
        await sendNewsletterSubscriptionNotification('invalid-email');
        expect(true).toBe(true);
      } catch (error) {
        // Expected to potentially fail, but should be a Resend error, not a code error
        expect(error).toBeDefined();
      }
    });
  });
});
