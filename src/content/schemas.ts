import { z } from "astro:content";

export const Encounter = z.object({
  id: z.string(),
  name: z.string(),
  flavor: z.string(),
  difficulty: z.enum([
    "Level 1",
    "Level 2",
    "Level 3",
    "Mini Boss",
    "Main Boss",
  ]),

  Objective: z.string(),
  Rewards: z.array(
    z.object({
      kind: z.enum([
        "Souls",
        "Draw",
        "Shortcut",
        "Trial",
        "Search",
        "Refresh",
        "Custom",
      ]),
      value: z.string().optional(),
      playerIcon: z.boolean(),
    })
  ),
  SpecialRules: z.array(
    z.object({
      keyword: z.string().optional(),
      text: z.string().optional(),
    })
  ),
});

export const Event = z.object({});

export const Enemy = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

export const Terrain = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

export const Set = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),

  encounters: z.array(Encounter),
  events: z.array(Event),
  enemies: z.array(Enemy),
  terrain: z.array(Terrain),
});
