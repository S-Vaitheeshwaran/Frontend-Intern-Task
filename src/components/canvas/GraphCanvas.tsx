import {
  Background,
  ReactFlow,
  BackgroundVariant,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";

import type {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {
  useEffect,
  useState,
} from "react";

import { useGraph } from "@/hooks/useGraph";
import { useAppStore } from "@/store/appStore";

import ServiceNode from "./ServiceNode";
import AppSidebar from "../layout/AppSidebar";

const nodeTypes = {
  service: ServiceNode,
};

export default function GraphCanvas() {
  const {
    selectedAppId,
    setSelectedNodeId,
  } = useAppStore();

  const { data } = useGraph(selectedAppId);

  const [nodes, setNodes] =
    useState<Node[]>([]);

  const [edges, setEdges] =
    useState<Edge[]>([]);

  useEffect(() => {
    if (!data) return;

    setNodes(
      data.nodes.map((node) => ({
        ...node,
        type: "service",
      }))
    );

    setEdges(data.edges);
  }, [data]);

  const onNodesChange = (
    changes: NodeChange[]
  ) =>
    setNodes((nds) =>
      applyNodeChanges(changes, nds)
    );

  const onEdgesChange = (
    changes: EdgeChange[]
  ) =>
    setEdges((eds) =>
      applyEdgeChanges(changes, eds)
    );

  const onConnect = (
    params: Connection
  ) =>
    setEdges((eds) =>
      addEdge(params, eds)
    );

  return (
    <div className="absolute inset-0 bg-[#090d14]">
      <AppSidebar />

      <ReactFlow
        defaultViewport={{
          x: -120,
          y: -80,
          zoom: 0.75,
        }}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView={false}
        minZoom={0.5}
        maxZoom={1.2}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) =>
          setSelectedNodeId(node.id)
        }
        defaultEdgeOptions={{
          animated: false,
          style: {
            stroke: "#6b7280",
            strokeWidth: 2,
          },
        }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={22}
          size={1.5}
          color="#2a3245"
        />
      </ReactFlow>
    </div>
  );
}