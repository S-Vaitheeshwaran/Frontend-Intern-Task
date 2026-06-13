import TopBar from "@/components/layout/TopBar";
import LeftRail from "@/components/layout/LeftRail";
import GraphCanvas from "@/components/canvas/GraphCanvas";
import NodeInspector from "@/components/inspector/NodeInspector";

import { useAppStore } from "@/store/appStore";

export default function CanvasPage() {
  const { selectedNodeId } = useAppStore();

  return (
    <div className="h-screen bg-[#090d14] text-white overflow-hidden">
      <TopBar />

      <div className="flex h-[calc(100vh-64px)]">
        <LeftRail />

        <div className="flex-1 relative">
          <GraphCanvas />
        </div>

        {selectedNodeId && (
          <div className="w-[280px] bg-black border-l border-[#1f2937]">
            <NodeInspector />
          </div>
        )}
      </div>
    </div>
  );
}