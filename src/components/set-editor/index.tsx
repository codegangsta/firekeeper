import { useMemo, useState } from "react";
import type { Set } from "../../content/schemas.ts";
import { createEngine } from "../../utils/liquid";
import { Button } from "../ui/button.tsx";
import { Badge } from "../ui/badge.tsx";
import { PlusIcon } from "lucide-react";
import EncounterCard from "../encounter-card/index.tsx";

interface Props {
  set: Set;
}

// Represents an editor for a given set/expansion for Dark Souls: The Board Game.
// On the left, the user can see all the different items that are a part of the set,
// and on the right, they can see the details of the selected item.
export default function SetEditor({ set }: Props) {
  // Try and get selected id from url param
  // If not found, default to the first encounter
  const id = new URLSearchParams(window.location.search).get("id");
  const [selected, setSelected] = useState<string>(id ?? set.encounters[0]?.id);

  const select = (id: string) => {
    setSelected(id);
    window.history.replaceState({}, "", `?id=${id}`);
  };

  const engine = useMemo(() => {
    return createEngine({ sets: [set] });
  }, [set]);

  const selectedEncounter = set.encounters.find(
    (encounter) => encounter.id === selected,
  );

  const level1Encounters = set.encounters.filter(
    (encounter) => encounter.difficulty === "1",
  );
  const level2Encounters = set.encounters.filter(
    (encounter) => encounter.difficulty === "2",
  );
  const level3Encounters = set.encounters.filter(
    (encounter) => encounter.difficulty === "3",
  );

  return (
    <div className="absolute inset-0 flex flex-row items-stretch">
      {/* Sidebar */}
      <div className="w-[400px] border-r border-border flex flex-col overflow-y-scroll">
        <div className="flex flex-col gap-4 px-8 py-4 border-b border-border">
          <h1 className="text-2xl font-bold">{set.name}</h1>
        </div>

        {[level1Encounters, level2Encounters, level3Encounters].map(
          (group, index) => (
            <div className="flex flex-col px-4 py-4 border-b border-border">
              <div className="flex flex-row gap-1 items-center">
                <h2 className="mb-2 px-4 text-xs font-md tracking-widest uppercase text-zinc-300 flex-grow">
                  Level {index + 1} Encounters
                </h2>
                <div className="flex-shrink-0 self-end">
                  <Badge
                    variant="outline"
                    className="gap-1 cursor-pointer hover:bg-zinc-800"
                  >
                    <PlusIcon className="w-4 h-4" />
                    <span>Add</span>
                  </Badge>
                </div>
              </div>
              {group.map((encounter) => (
                <Button
                  className="w-full justify-start"
                  variant={selected == encounter.id ? "secondary" : "ghost"}
                  onClick={() => select(encounter.id)}
                >
                  {encounter.name}
                </Button>
              ))}
            </div>
          ),
        )}
      </div>
      {/* Canvas */}
      <div className="flex-grow h-full w-full bg-zinc-950 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="flex flex-col items-center justify-center h-full w-full">
          {selectedEncounter && (
            <EncounterCard
              encounter={selectedEncounter}
              sets={[set]}
              scale={0.65}
              engine={engine}
            />
          )}
        </div>
      </div>
    </div>
  );
}
