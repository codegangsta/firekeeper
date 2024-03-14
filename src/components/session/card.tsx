import type { NodeProps } from "reactflow";
import { cn } from "../../utils/styles";

interface Props {
  width: number;
  height: number;
  src: string;
}

export default function Card({ data, selected }: NodeProps<Props>) {
  const { width, height, src } = data;
  return (
    <img
      src={src}
      width={width}
      height={height}
      className={cn(
        "rounded-2xl",
        selected ? "border border-blue-500" : "border border-transparent",
      )}
    />
  );
}
