import type { PropsWithChildren } from "react";
import { cn } from "../../utils/styles";
import TileNode from "./tile-node";

interface TileProps {
  id: number;
  entrance?: "left" | "right" | "top" | "bottom";
  exit?: "left" | "right" | "top" | "bottom";
  size?: "md" | "lg";
}

export default function Tile(props: PropsWithChildren<TileProps>) {
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
