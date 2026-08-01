import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/features/contact/adapters", () => ({
  verifyTurnstile: vi.fn(),
  sendEnquiry: vi.fn(),
}));
import { sendEnquiry, verifyTurnstile } from "@/features/contact/adapters";
import { POST } from "./route";

const payload = {
  enquiryType: "partnership",
  name: "Amina Bello",
  email: "amina@example.org",
  organisation: "Example Foundation",
  message: "We would like to discuss a responsible programme partnership.",
  consent: true,
  turnstileToken: "test-token",
  company: "",
  sourcePage: "/contact",
};
beforeEach(() => vi.clearAllMocks());
describe("POST /api/contact", () => {
  it("rejects invalid submissions before calling providers", async () => {
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...payload, email: "invalid" }),
      }),
    );
    expect(response.status).toBe(422);
    expect(verifyTurnstile).not.toHaveBeenCalled();
  });
  it("verifies spam protection and sends valid enquiries", async () => {
    vi.mocked(verifyTurnstile).mockResolvedValue(true);
    vi.mocked(sendEnquiry).mockResolvedValue({ id: "message-id" });
    const response = await POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
    expect(response.status).toBe(200);
    expect(sendEnquiry).toHaveBeenCalledOnce();
  });
});
