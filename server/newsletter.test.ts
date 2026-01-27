import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("newsletter.subscribe", () => {
  it("should subscribe a valid email to the newsletter", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const testEmail = `test-${Date.now()}@example.com`;
    const result = await caller.newsletter.subscribe({ email: testEmail });

    expect(result.success).toBe(true);
    expect(result.message).toBe("Suscripcion exitosa");
  });

  it("should reject invalid email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.newsletter.subscribe({ email: "invalid-email" });
      expect.fail("Should have thrown an error for invalid email");
    } catch (error: any) {
      expect(error.message).toContain("email");
    }
  });

  it("should handle duplicate email subscriptions gracefully", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const testEmail = `duplicate-${Date.now()}@example.com`;

    // First subscription
    const result1 = await caller.newsletter.subscribe({ email: testEmail });
    expect(result1.success).toBe(true);

    // Second subscription with same email should also succeed (reactivate)
    const result2 = await caller.newsletter.subscribe({ email: testEmail });
    expect(result2.success).toBe(true);
  });
});
