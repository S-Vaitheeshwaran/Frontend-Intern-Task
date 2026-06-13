import { X } from "lucide-react";
import { useAppStore } from "@/store/appStore";
import NodeInspector from "@/components/inspector/NodeInspector";

export default function MobileDrawer() {
  const {
    isMobilePanelOpen,
    setMobilePanelOpen,
  } = useAppStore();

  if (!isMobilePanelOpen)
    return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 lg:hidden">
      <div className="absolute right-0 top-0 w-80 bg-white h-full shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-semibold">
            Inspector
          </h2>

          <button
            onClick={() =>
              setMobilePanelOpen(
                false
              )
            }
          >
            <X size={18} />
          </button>
        </div>

        <NodeInspector />
      </div>
    </div>
  );
}