import { defineCollection } from "astro:content";
import { SetSchema } from "./schemas";

export const collections = {
  sets: defineCollection({
    type: "data",
    schema: SetSchema,
  }),
};
