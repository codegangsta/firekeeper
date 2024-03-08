import type { Encounter, Set } from "../../content/schemas";
import { liquify } from "../../utils/liquid";
import TileItems from "./tile-items";
import Tile from "./tile";
import type { Liquid } from "liquidjs";

interface Props {
  engine: Liquid;
  scale?: number;
  encounter: Encounter;
  sets: Set[];
}

const unknownIcon = "/icons/unknown.png";

export default function EncounterCard({
  scale = 1,
  sets,
  encounter,
  engine,
}: Props) {
  const difficultyImage = `/images/difficulty-${encounter.difficulty}.png`;
  const [tile1, tile2, tile3] = encounter.tiles;

  const findEnemyIcon = (id: string) => {
    const enemy = sets
      .flatMap((set) => set.enemies)
      .filter((enemy) => enemy !== undefined)
      .find((enemy) => enemy.id === id);
    return enemy?.icon ?? unknownIcon;
  };

  const findTerrainIcon = (id: string) => {
    const terrain = sets
      .flatMap((set) => set.terrain)
      .filter((t) => t !== undefined)
      .find((t) => t.id === id);
    return terrain?.icon ?? unknownIcon;
  };

  return (
    <div
      className="rounded-[16px] border border-zinc-800 overflow-clip sm:hover:scale-110 md:hover:scale-125 transition-transform hover:z-10 hover:shadow-2xl cursor-pointer"
      style={{
        width: 807 * scale,
        height: 1397 * scale,
      }}
    >
      <div
        className="relative origin-top-left"
        style={{
          transform: `scale(${scale})`,
          width: 807,
          height: 1397,
        }}
      >
        <img src="/images/encounter-card.jpg" />
        <img
          className="absolute"
          src={difficultyImage}
          style={{ width: 128, height: 128, top: 29, right: 19 }}
        />
        <div
          className="absolute rounded-full bg-black"
          style={{ width: 111, height: 111, top: 39, left: 28 }}
        ></div>
        {/* Title */}
        <span
          className="absolute text-dark-souls-pale whitespace-pre-wrap text-6xl flex text-center items-center justify-center font-dark-souls"
          style={{ top: 35, left: 188, width: 430, height: 120 }}
        >
          {encounter.name}
        </span>
        {/* Flavor */}
        <span
          className="absolute text-black text-[21px] whitespace-pre-wrap flex text-center items-center justify-center inset-x-0 mx-12 italic leading-6"
          style={{ top: 178, height: 58 }}
        >
          {encounter.flavor}
        </span>
        {/* Objective */}
        <div
          className="absolute text-black/70 text-2xl flex flex-col leading-7 inset-x-0"
          style={{ top: 270, height: 58, left: 42, right: 42 }}
        >
          <span className="font-dark-souls font-semibold tracking-wider  text-[26px] leading-8">
            Objective:
          </span>
          <span
            dangerouslySetInnerHTML={{
              __html: liquify(engine, encounter.objective),
            }}
          ></span>
        </div>
        {/* Rewards */}
        <div
          className="absolute text-black/70 text-2xl flex flex-col leading-6 inset-x-0 "
          style={{ top: 370, height: 250, left: 42, width: 220 }}
        >
          <span className="font-dark-souls font-semibold tracking-wider text-[26px] leading-8">
            Rewards:
          </span>
          {encounter.rewards.map((reward, index) => (
            <>
              <span className="text-black font-bold">
                {reward.kind}
                {reward.value && ":"}
              </span>
              <div className="flex flex-row">
                {reward.value && (
                  <span
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: liquify(engine, reward.value),
                    }}
                  ></span>
                )}
              </div>
            </>
          ))}
        </div>
        {/* Special Rules */}
        <div
          className="absolute text-black/70 font-semibold text-2xl flex flex-col leading-7 inset-x-0"
          style={{ top: 370, height: 250, left: 285, width: 475 }}
        >
          <span className="font-dark-souls tracking-wider text-[26px] leading-8">
            Special Rules:
          </span>
          <div className="flex flex-col gap-3 leading-6">
            {encounter.specialRules.map((rule, index) => (
              <span
                key={index}
                className="font-medium whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: liquify(engine, rule),
                }}
              ></span>
            ))}
          </div>
        </div>
        {/* Tiles Items */}
        <div className="absolute top-[640px] left-[540px] flex flex-col gap-1">
          {encounter.tiles.map((tile, index) => (
            <TileItems
              id={index + 1}
              node1={tile.node1?.map(findEnemyIcon)}
              node2={tile.node2?.map(findEnemyIcon)}
              node3={tile.node3 ? findTerrainIcon(tile.node3 ?? "") : undefined}
              node4={tile.node4 ? findTerrainIcon(tile.node4 ?? "") : undefined}
              trap={tile.trap}
              entrance={tile.entrance}
            />
          ))}
        </div>
        <div
          className="absolute flex flex-col items-center justify-center"
          style={{ width: 493, height: 710, top: 663, left: 30 }}
        >
          {tile1 && (
            <Tile
              id={1}
              exit={tile1.exit}
              entrance={tile1.entrance}
              size={tile2 ? "md" : "lg"}
            >
              {tile2 && (
                <Tile id={2} exit={tile2.exit} entrance={tile2.entrance}>
                  {tile3 && (
                    <Tile id={3} exit={tile3.exit} entrance={tile3.entrance} />
                  )}
                </Tile>
              )}
            </Tile>
          )}
        </div>
      </div>
    </div>
  );
}
