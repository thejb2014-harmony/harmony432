import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { subscribeToNewsletter } from "./db";
import { sendNewsletterSubscriptionNotification } from "./email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .mutation(async ({ input }) => {
        try {
          await subscribeToNewsletter(input.email);
          // Send notification email to owner
          try {
            await sendNewsletterSubscriptionNotification(input.email);
          } catch (emailError) {
            console.warn("Failed to send notification email:", emailError);
            // Don't fail the subscription if email fails
          }
          return { success: true, message: "Suscripcion exitosa" };
        } catch (error) {
          console.error("Newsletter subscription error:", error);
          return { success: false, message: "Error al suscribirse" };
        }
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
