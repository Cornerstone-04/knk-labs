import { z } from "zod";

export const waitlistSchema = z.object({
  formType: z.enum(["knk", "pop"]),

  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  country: z.string().trim().min(2, "Please enter your country."),

  productInterest: z.string().optional(),

  selectedHand: z.string().optional(),
  selectedColour: z.string().optional(),
  selectedStyle: z.string().optional(),
  watchOrientation: z.string().optional(),
});

export type WaitlistPayload = z.infer<typeof waitlistSchema>;
