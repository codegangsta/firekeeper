import { z } from "astro:content";

export const Encounter = z.object({
  id: z.string(),
  name: z.string(),
  flavor: z.string(),
  difficulty: z.enum(["1", "2", "3", "mini-boss", "main-boss"]),

  objective: z.string(),
  rewards: z.array(
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
      playerIcon: z.boolean().default(false),
    })
  ),
  specialRules: z.array(
    z.object({
      keyword: z.string().optional(),
      text: z.string().optional(),
    })
  ),
  tiles: z.array(
    z.object({
      entrance: z.enum(["top", "bottom", "left", "right"]).optional(),
      exit: z.enum(["top", "bottom", "left", "right"]).default("bottom"),
      trap: z.boolean().default(false),
      node1: z.array(z.string()).optional(),
      node2: z.array(z.string()).optional(),
      node3: z.string().optional(),
      node4: z.string().optional(),
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
