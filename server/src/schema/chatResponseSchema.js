import { z } from "zod";

export const chatResponseSchema = z.object({
  answer: z.string(),

  sources: z.array(
    z.object({
      type: z.string(),
      name: z.string(),
    })
  ),

  suggestedQuestions: z.array(z.string()),
});