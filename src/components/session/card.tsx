import { NodeToolbar, type NodeProps } from "reactflow";
import { cn } from "../../utils/styles";
import { Button } from "../ui/button";

interface Props {
  width: number;
  height: number;
  src?: string;
}

export default function Card({ data, selected }: NodeProps<Props>) {
  const { width, height, src } = data;
  return (
    <div>
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
          src ? "" : "border-2 border-zinc-700 rounded-2xl bg-zinc-900/50",
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
      </div>
    </div>
  );
}
