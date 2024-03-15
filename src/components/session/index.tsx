import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  type Node,
  type NodeChange,
  SelectionMode,
  NodeToolbar,
  Panel,
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
        snapToGrid
        fitView
        zoomOnPinch
        zoomOnScroll
        nodesDraggable={false}
        nodeDragThreshold={10}
        onDragOver={(event) => console.log("dragover", event)}
        fitViewOptions={{
          padding: 1,
        }}
      >
        <Background />
        <Controls />
        <Panel
          position="bottom-center"
          className="w-full border-t border-zinc-800"
        >
          <div className="flex flex-row gap-2 bg-zinc-900 p-6">
            <img src="/images/card-test.jpg" width="150" />
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

Session.Card = Card;
