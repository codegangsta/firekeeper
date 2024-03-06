import { cn } from "../utils/styles";

interface TileItemsProps {
  id: number;
  top: number;
  left: number;
}

function TileItems(props: TileItemsProps) {
  const { id, top, left } = props;
  return (
    <div
      className="absolute"
      style={{ width: 256, height: 242, top: top, left: left }}
    >
      <img src="/images/tile-items.png" />
      {id === 1 && (
        <>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: 5, right: 30 }}
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
            style={{ width: 100, height: 100, bottom: 5, right: 30 }}
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
        style={{ width: 100, height: 100, bottom: 5, right: 30 }}
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
    </div>
  );
}

export default function EncounterCard() {
  return (
    <div
      className="rounded-3xl overflow-clip relative"
      style={{ width: 807, height: 1397 }}
    >
      <img src="/images/encounter-card.jpg" />
      {/* Title */}
      <span
        className="absolute text-white text-6xl flex text-center items-center justify-center font-dark-souls"
        style={{ top: 35, left: 188, width: 430, height: 120 }}
      >
        The Locked Grave
      </span>
      {/* Flavor */}
      <span
        className="absolute text-black text-xl flex text-center items-center justify-center inset-x-0 mx-24 italic"
        style={{ top: 178, height: 58 }}
      >
        The passage ahead ends in a stout door, sealed by an ancient lock, but
        where there is a lock there must also be a key...
      </span>
      {/* Objective */}
      <div
        className="absolute text-black/70 text-2xl flex flex-col leading-7 inset-x-0"
        style={{ top: 270, height: 58, left: 42, right: 42 }}
      >
        <span className="font-dark-souls font-semibold tracking-wider  text-[26px] leading-8">
          Objective:
        </span>
        <span className="text-black">Open all chests.</span>
      </div>
      {/* Rewards */}
      <div
        className="absolute text-black/70 text-2xl flex flex-col leading-6 inset-x-0 "
        style={{ top: 370, height: 250, left: 42, width: 220 }}
      >
        <span className="font-dark-souls font-semibold tracking-wider text-[26px] leading-8">
          Rewards:
        </span>
        <span className="text-black font-bold">Souls:</span>
        <span>2x Souls per enemy killed</span>
        <span className="text-black font-bold">Draw:</span>
        <span>1x Event</span>
        <span className="text-black font-bold">Trial:</span>
        <span>Dragon Scale</span>
        <span className="text-black font-bold">Refresh:</span>
        <span>Estus Flask</span>
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
          <span className="text-black italic">
            Trial: Kill the Skeleton Beast
          </span>
          <span className="font-medium">
            If the lever is activated, spawn a Skeleton Beast on tile three, on
            the closest enemy spawn node to the character.
          </span>
        </div>
      </div>
      <TileItems id={1} top={650} left={540} />)
      <TileItems id={2} top={895} left={540} />)
      <TileItems id={3} top={1140} left={540} />)
    </div>
  );
}
