import { z } from "zod";

export const enquiryTypes = [
  "general",
  "partnership",
  "funding",
  "research",
  "volunteer",
  "media",
] as const;

export const contactSchema = z.object({
  enquiryType: z.enum(enquiryTypes),
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.email("Enter a valid email address.").max(254),
  organisation: z.string().trim().max(150).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters.")
    .max(4000),
  consent: z.literal(true, {
    error: "Confirm that SPiD may use these details to respond.",
  }),
  turnstileToken: z.string().min(1, "Complete the anti-spam check."),
  company: z
    .string()
    .max(0, "Invalid submission.")
    .optional()
    .or(z.literal("")),
  sourcePage: z.string().trim().max(300).optional().or(z.literal("")),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export function flattenContactErrors(error: z.ZodError<ContactPayload>) {
  return error.flatten().fieldErrors;
}
