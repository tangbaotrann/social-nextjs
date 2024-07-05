import { z } from "zod";

// Profile
export const objProfile = z.object({
  cover: z.string().optional(),
  name: z.string().max(60).optional(),
  surname: z.string().max(60).optional(),
  description: z.string().max(60).optional(),
  city: z.string().max(60).optional(),
  school: z.string().max(60).optional(),
  work: z.string().max(60).optional(),
  website: z.string().max(60).optional(),
});

// Post
export const objPost = z.object({
  desc: z.string().min(1).max(255),
});

// export const validateProfile = s.safeParse(fi)
// export type validateProfile = z.infer<typeof objProfile>
