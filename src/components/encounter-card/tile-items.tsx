import { cn } from "../../utils/styles";

interface TileItemsProps {
  id: number;
  trap?: boolean;
  node1?: string[];
  node2?: string[];
  node3?: string;
  node4?: string;
  entrance?: "left" | "right" | "top" | "bottom";
}

export default function TileItems(props: TileItemsProps) {
  const { id, entrance, trap = false } = props;

  const bottom = trap ? -20 : 5;
  return (
    <div className="relative" style={{ width: 256, height: 242 }}>
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
                "text-gray-900 font-semibold font-dark-souls text-6xl scale-125 blur saturate-150",
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
                "text-gray-900 font-semibold font-dark-souls text-6xl scale-100 blur-sm saturate-150",
              )}
            >
              {id}
            </span>
          </div>
        </>
      )}
      {entrance && (
        <>
          <div
            className="absolute flex items-center justify-center"
            style={{ width: 100, height: 100, bottom: bottom, right: 30 }}
          >
            <span
              className={cn(
                "text-dark-souls-orange font-semibold font-dark-souls text-6xl scale-125 blur saturate-150",
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
                "text-dark-souls-orange font-semibold font-dark-souls text-6xl scale-100 blur-sm",
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
            id != 1 ? "drop-shadow-md" : "",
          )}
        >
          {id}
        </span>
      </div>
      <div className="absolute inset-0 gap-[11px] flex flex-col mt-[15px] ml-[64px]">
        <div className="flex flex-row gap-3 h-[48px]">
          {(props.node1 ?? []).map((node, index) => (
            <div key={index} className="w-[48px] h-[48px] rounded-full p-1">
              <img src={node} className="object-scale-down w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 h-[48px]">
          {(props.node2 ?? []).map((node, index) => (
            <div key={index} className="w-[48px] h-[48px] rounded-full p-1">
              <img src={node} className="object-scale-down w-full h-full" />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 h-[48px]">
          {props.node3 && (
            <div className="w-[48px] h-[48px] rounded-full p-1">
              <img
                src={props.node3}
                className="object-scale-down w-full h-full"
              />
            </div>
          )}
        </div>
        <div className="flex flex-row gap-3 h-[48px]">
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
