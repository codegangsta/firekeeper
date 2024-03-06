interface Campaign {
  id: string;
  name: string;
  description: string;
  author: string;

  stages: Stage[];
  sets: CardSet[];
}

enum Difficulty {
  LevelOne = "Level 1",
  LevelTwo = "Level 2",
  LevelThree = "Level 3",
  // LevelFour = "Level 4",
  MiniBoss = "Mini Boss",
  MainBoss = "Main Boss",
  // MegaBoss = "Mega Boss",
}

interface Stage {
  difficulty: Difficulty;
}

interface CardSet {
  id: string;
  name: string;
  icon: string;

  encounters: Encounter[];
  events: Event[];
  enemies: Enemy[];
  terrain: Terrain[];
}

interface Encounter {
  id: string;
  name: string;
  flavor: string;
  difficulty: Difficulty;

  Objective: string;
  Rewards: Reward[];
  SpecialRules: {
    keyword?: string;
    text?: string;
  }[];
}

enum RewardKind {
  Souls = "Souls",
  Draw = "Draw",
  Shortcut = "Shortcut",
  Trial = "Trial",
  Search = "Search",
  Refresh = "Refresh",
  Custom = "Custom",
}

interface Reward {
  kind: RewardKind;
  value?: string;
  playerIcon: boolean;
}

interface Tile {
  entrance?: "top" | "right" | "bottom" | "left";
  node1?: Enemy[];
  node2?: Enemy[];
  node3?: Terrain;
  node4?: Terrain;
  trap?: boolean;
}

interface Enemy {
  id: string;
  name: string;
  icon: string;
}

interface Terrain {
  id: string;
  name: string;
  icon: string;
}

interface Event {}
