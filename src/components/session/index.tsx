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
        label: "Encounter 1",
      },
      connectable: false,
    },
    {
      id: "2",
      position: { x: 400, y: 100 },
      type: "card",
      data: {
        width: 250,
        height: 350,
        label: "Encounter 2",
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
        fitViewOptions={{
          padding: 1,
        }}
      >
        <Background />
        <Controls />
        <Panel
          position="bottom-right"
          className="-mb-[200px] px-24 md:px-[100px]"
        >
          <div className="flex flex-row p-6 w-full justify-center">
            {[0, 1, 2, 3].map((id, index) => (
              <img
                src="/images/card-test.jpg"
                width="250"
                className="hover:scale-125 hover:rotate-1 hover:z-10 origin-bottom rounded-2xl transition-transform duration-200 drop-shadow border border-zinc-900 -mx-20 -mb-[100px]"
                style={{
                  rotate: `${index * 3 - (4 / 2) * 3}deg`,
                }}
                draggable
              />
            ))}
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

Session.Card = Card;
