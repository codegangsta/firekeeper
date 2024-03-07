import type { PropsWithChildren } from "react";
import { cn } from "../utils/styles";
import { Encounter } from "../content/schemas";
import { z } from "astro:content";

interface TileNodeProps {
  id: number;
  entrance?: "left" | "right" | "top" | "bottom";
}

function TileNode(props: TileNodeProps) {
  const { id, entrance } = props;

  if (
    (entrance == "left" && [1, 6, 11].includes(id)) ||
    (entrance == "right" && [3, 8, 13].includes(id)) ||
    (entrance == "top" && [1, 2, 3].includes(id)) ||
    (entrance == "bottom" && [11, 12, 13].includes(id))
  ) {
    return (
      <img
        src="/images/starting-marker.png"
        className="-m-[1px]"
        style={{ height: 18, width: 18 }}
      />
    );
  }

  return (
    <div
      className={cn(
        "w-4 h-4 border-[3.5px] border-dark-souls-gold/80 rounded-full",
        id === 7 ? "opacity-0" : ""
      )}
    ></div>
  );
}

interface TileItemsProps {
  id: number;
  top: number;
  left: number;
  trap?: boolean;
  node1: string[];
  node2?: string[];
  node3?: string;
  node4?: string;
}

function TileItems(props: TileItemsProps) {
  const { id, top, left, trap = false } = props;

  const bottom = trap ? -20 : 5;
  return (
    <div
      className="absolute"
      style={{ width: 256, height: 242, top: top, left: left }}
    >
      <img src="/images/tile-items.png" />
      {trap && (
        <>
          <img
            className="absolute"
            style={{ width: 82, height: 120, bottom: -5, right: 37 }}
            src="/images/trap.png"
          />
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
          >
            <span
              className={cn(
                "text-gray-900 font-semibold font-dark-souls text-6xl scale-125 blur saturate-150"
              )}
            >
              {id}
            </span>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
          >
            <span
              className={cn(
                "text-gray-900 font-semibold font-dark-souls text-6xl scale-100 blur-sm saturate-150"
              )}
            >
              {id}
            </span>
          </div>
        </>
      )}
      {id === 1 && (
        <>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
          >
            <span
              className={cn(
                "text-dark-souls-orange font-semibold font-dark-souls text-6xl scale-125 blur saturate-150"
              )}
            >
              {id}
            </span>
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
          >
            <span
              className={cn(
                "text-dark-souls-orange font-semibold font-dark-souls text-6xl scale-100 blur-sm"
              )}
            >
              {id}
            </span>
          </div>
        </>
      )}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
      >
        <span
          className={cn(
            "text-dark-souls-pale font-dark-souls text-6xl",
            id != 1 ? "drop-shadow-md" : ""
          )}
        >
          {id}
        </span>
      </div>
      <div className="absolute inset-0 gap-[11px] flex flex-col mt-[15px] ml-[64px]">
        <div className="flex flex-row gap-3">
          {(props.node1 ?? []).map((node, index) => (
            <div key={index} className="w-[48px] h-[48px] rounded-full p-1">
              <img src={node} className="object-scale-down w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {(props.node2 ?? []).map((node, index) => (
            <div key={index} className="w-[48px] h-[48px] rounded-full p-1">
              <img src={node} className="object-scale-down w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {props.node3 && (
            <div className="w-[48px] h-[48px] rounded-full p-1">
              <img
                src={props.node3}
                className="object-scale-down w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="flex flex-row gap-3">
          {props.node4 && (
            <div className="w-[48px] h-[48px] rounded-full p-1">
              <img
                src={props.node4}
                className="object-scale-down w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TileProps {
  id: number;
  entrance?: "left" | "right" | "top" | "bottom";
  exit?: "left" | "right" | "top" | "bottom";
  size?: "md" | "lg";
}

function Tile(props: PropsWithChildren<TileProps>) {
  const { id, entrance, exit, size = "md", children } = props;

  return (
    <div
      className={cn(
        "flex",
        exit === "left" ? "flex-row-reverse items-end" : "",
        exit === "right" ? "flex-row" : "",
        exit === "top" ? "flex-col-reverse items-end" : "",
        exit === "bottom" ? "flex-col" : ""
      )}
    >
      <div
        className={cn(
          "relative h-[212px] w-[212px]",
          size == "lg" ? "h-[424px] w-[424px]" : ""
        )}
      >
        {/*Borders*/}
        {(exit !== "top" || !children) && (
          <div className="absolute inset-x-3 top-0 h-0.5 bg-dark-souls-brown/50"></div>
        )}
        {(exit !== "bottom" || !children) && (
          <div className="absolute inset-x-3 bottom-0 h-0.5 bg-dark-souls-brown/50"></div>
        )}
        {(exit !== "left" || !children) && (
          <div className="absolute inset-y-3 left-0 w-0.5 bg-dark-souls-brown/50"></div>
        )}
        {(exit !== "right" || !children) && (
          <div className="absolute inset-y-3 right-0 w-0.5 bg-dark-souls-brown/50"></div>
        )}

        {/*Caps*/}
        {((exit !== "top" && exit !== "left") || !children) && (
          <img
            src="/images/cap.png"
            className="absolute w-4 h-4 -top-2 -left-2"
          />
        )}
        {((exit !== "bottom" && exit !== "left") || !children) && (
          <img
            src="/images/cap.png"
            className="absolute w-4 h-4 -bottom-2 -left-2"
          />
        )}
        {((exit !== "top" && exit !== "right") || !children) && (
          <img
            src="/images/cap.png"
            className="absolute w-4 h-4 -top-2 -right-2"
          />
        )}
        {((exit !== "bottom" && exit !== "right") || !children) && (
          <img
            src="/images/cap.png"
            className="absolute w-4 h-4 -bottom-2 -right-2"
          />
        )}

        <div
          className={cn(
            "absolute w-[212px] h-[212px] flex flex-col p-6 gap-5",
            size == "lg" ? "scale-[200%] origin-top-left" : ""
          )}
        >
          <div className="flex flex-row justify-between">
            <TileNode id={1} entrance={entrance} />
            <TileNode id={2} entrance={entrance} />
            <TileNode id={3} entrance={entrance} />
          </div>
          <div className="flex flex-row justify-around">
            <TileNode id={4} entrance={entrance} />
            <TileNode id={5} entrance={entrance} />
          </div>
          <div className="flex flex-row justify-between">
            <TileNode id={6} entrance={entrance} />
            <TileNode id={7} entrance={entrance} />
            <TileNode id={8} entrance={entrance} />
          </div>
          <div className="flex flex-row justify-around">
            <TileNode id={9} entrance={entrance} />
            <TileNode id={10} entrance={entrance} />
          </div>
          <div className="flex flex-row justify-between">
            <TileNode id={11} entrance={entrance} />
            <TileNode id={12} entrance={entrance} />
            <TileNode id={13} entrance={entrance} />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              "text-dark-souls-brown/40 font-dark-souls text-8xl drop-shadow-md"
            )}
          >
            {id}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

type EncounterSchema = z.infer<typeof Encounter>;

interface Props {
  scale?: number;
  encounter: EncounterSchema;
}

export default function EncounterCard({ scale = 1, encounter }: Props) {
  const difficultyImage = `/images/difficulty-${encounter.difficulty}.png`;
  const [tile1, tile2, tile3] = encounter.tiles;

  return (
    <div
      className="rounded-xl border border-zinc-700 hover:border-zinc-500 overflow-clip sm:hover:scale-110 md:hover:scale-125 transition-all hover:z-10 hover:shadow-2xl cursor-pointer"
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
          className="absolute text-white text-6xl flex text-center items-center justify-center font-dark-souls"
          style={{ top: 35, left: 188, width: 430, height: 120 }}
        >
          {encounter.name}
        </span>
        {/* Flavor */}
        <span
          className="absolute text-black text-[21px] flex text-center items-center justify-center inset-x-0 mx-24 italic leading-6"
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
          <span>{encounter.objective}</span>
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
              <span className="text-black font-bold">{reward.kind}:</span>
              {reward.value && <span>{reward.value}</span>}
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
              <>
                {rule.keyword && (
                  <span className="text-black italic">{rule.keyword}</span>
                )}
                {rule.text && <span className="font-medium">{rule.text}</span>}
              </>
            ))}
          </div>
        </div>
        {/* Tiles Items */}
        <TileItems
          id={1}
          top={640}
          left={540}
          node1={["/icons/giant-skeleton-archer.png"]}
          node2={["/icons/skeleton-soldier.png"]}
          node3="/icons/tombstone.png"
        />
        <TileItems
          id={2}
          top={890}
          left={540}
          trap
          node1={["/icons/giant-skeleton-soldier.png"]}
          node2={["/icons/necromancer.png"]}
          node3="/icons/lever.png"
          node4="/icons/barrel.png"
        />
        )
        <TileItems
          id={3}
          top={1140}
          left={540}
          node1={["/icons/giant-skeleton-archer.png"]}
          node2={["/icons/skeleton-archer.png"]}
          node3="/icons/treasure-chest.png"
          node4="/icons/treasure-chest.png"
        />
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
