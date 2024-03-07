import { cn } from "../../utils/styles";

interface Props {
  id: number;
  entrance?: "left" | "right" | "top" | "bottom";
}

export default function TileNode(props: Props) {
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
