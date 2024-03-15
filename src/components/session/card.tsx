import { NodeToolbar, type NodeProps } from "reactflow";
import { cn } from "../../utils/styles";
import { Button } from "../ui/button";
import { useState } from "react";

interface Props {
  width: number;
  height: number;
  src?: string;
  label?: string;
}

export default function Card({ data, selected }: NodeProps<Props>) {
  const { width, height, src, label } = data;
  const [showDropZone, setShowDropZone] = useState(false);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("dragging over", e);
  };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dragging enter", e);
    setShowDropZone(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dragging leave", e);
    setShowDropZone(false);
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dropped!!", e);
    setShowDropZone(false);
  };

  return (
    <div
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <NodeToolbar className="flex flex-row gap-2">
        <Button size={"sm"} onClick={() => console.log("clicked")}>
          Move
        </Button>
        <Button size={"sm"} onClick={() => console.log("clicked")}>
          Pick up
        </Button>
        <Button size={"sm"} onClick={() => console.log("clicked")}>
          Discard
        </Button>
      </NodeToolbar>
      <div
        style={{
          width: width,
          height: height,
        }}
        className={cn(
          "relative",
          src ? "" : "border-2 border-zinc-700 rounded-2xl bg-zinc-900/50",
          showDropZone ? "!border-blue-500" : "",
        )}
      >
        {src && (
          <img
            src={src}
            width={width}
            height={height}
            className={cn(
              "rounded-2xl",
              selected ? "border border-blue-500" : "",
            )}
          />
        )}

        {label && (
          <div className="absolute inset-x-0 -bottom-8 flex items-center justify-center">
            <span>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}
