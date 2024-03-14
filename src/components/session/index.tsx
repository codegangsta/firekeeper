import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  type Node,
  type NodeChange,
} from "reactflow";
import "reactflow/dist/style.css";
import Card from "./card";
import { useCallback, useState } from "react";

const nodeTypes = {
  card: Card,
};

export default function Session() {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      position: { x: 100, y: 100 },
      type: "card",
      data: {
        src: "/images/card-test.jpg",
        width: 250,
        height: 350,
      },
      connectable: false,
    },
    {
      id: "2",
      position: { x: 400, y: 100 },
      type: "card",
      data: {
        src: "/images/card-test.jpg",
        width: 250,
        height: 350,
      },
      connectable: false,
    },
    {
      id: "3",
      position: { x: 700, y: 100 },
      type: "card",
      data: {
        src: "/images/card-test.jpg",
        width: 250,
        height: 350,
      },
      connectable: false,
    },
  ]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  return (
    <div className="absolute inset-0">
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        draggable={true}
        onNodesChange={onNodesChange}
        fitView
        fitViewOptions={{
          padding: 1,
        }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

Session.Card = Card;
