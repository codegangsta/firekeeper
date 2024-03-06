import { defineCollection } from "astro:content";
import { Set } from "./schemas";

export const collections = {
  sets: defineCollection({
    type: "content",
    schema: Set,
  }),
};
