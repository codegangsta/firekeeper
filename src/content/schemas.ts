import { z } from "astro:content";

export const EncounterSchema = z.object({
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
    }),
  ),
  specialRules: z.array(
    z.object({
      keyword: z.string().optional(),
      text: z.string().optional(),
    }),
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
    }),
  ),
});

export const EventSchema = z.object({});

export const EnemySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

export const TerrainSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
});

// Keywords represent special rules and objective rules that belong
// to a set. For instance, Tomb of giants introduces Survive, Exit,
// Occupy, Onslaught, Darkness, Timer, Respawn and Trial.
//
// Ideally we can eventually generate hover tooltips for each keyword
// to make it easier to grok new rules.
export const KeywordSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const SetSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),

  encounters: z.array(EncounterSchema),
  events: z.array(EventSchema),
  enemies: z.array(EnemySchema),
  terrain: z.array(TerrainSchema),
  keywords: z.array(KeywordSchema),
});

export type Encounter = z.infer<typeof EncounterSchema>;
export type Event = z.infer<typeof EventSchema>;
export type Enemy = z.infer<typeof EnemySchema>;
export type Terrain = z.infer<typeof TerrainSchema>;
export type Keyword = z.infer<typeof KeywordSchema>;
export type Set = z.infer<typeof SetSchema>;
