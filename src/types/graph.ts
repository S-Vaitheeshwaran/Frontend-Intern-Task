import type { Edge, Node } from "@xyflow/react";

export type NodeStatus =
  | "Healthy"
  | "Degraded"
  | "Down";

export interface ServiceNodeData
  extends Record<string, unknown> {
  label: string;
  status: NodeStatus;
  value: number;
  description?: string;
}

export type ServiceNode =
  Node<ServiceNodeData>;

export interface GraphResponse {
  nodes: ServiceNode[];
  edges: Edge[];
}

export interface AppItem {
  id: string;
  name: string;
}