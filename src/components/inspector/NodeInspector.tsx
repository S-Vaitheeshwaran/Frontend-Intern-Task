import { useAppStore } from "@/store/appStore";
import { useGraph } from "@/hooks/useGraph";
import { Settings } from "lucide-react";

export default function NodeInspector() {
  const {
    selectedNodeId,
    selectedAppId,
  } = useAppStore();

  const { data } = useGraph(selectedAppId);

  const node =
    data?.nodes.find(
      (n) => n.id === selectedNodeId
    );

  if (!node) return null;

  return (
    <div className="h-full bg-black text-white">

      <div className="p-6 border-b border-[#1f2937] flex justify-between">
        <h2 className="text-2xl font-bold">
          {node.data.label}
        </h2>

        <Settings size={20} />
      </div>

      <div className="p-6">

        <div
          className={`inline-flex px-4 py-2 rounded-lg ${
            node.data.status === "Healthy"
              ? "bg-green-900 text-green-400"
              : "bg-red-900 text-red-400"
          }`}
        >
          {node.data.status}
        </div>

        <div className="mt-8">
          <p className="mb-3">CPU Usage</p>

          <input
            type="range"
            value={Number(node.data.value)}
            readOnly
            className="w-full"
          />
        </div>

        <div className="mt-8 bg-[#111827] rounded-xl p-5">
          Runtime Usage: {node.data.value}%
        </div>

        <div className="mt-8">
          <h4 className="font-medium mb-2">
            Description
          </h4>

          <p className="text-gray-400">
            {String(
              node.data.description ?? ""
            )}
          </p>
        </div>

      </div>

    </div>
  );
}