import { Plus } from "lucide-react";

interface Props {
  onAddNode: () => void;
}

export default function FlowControls({
  onAddNode,
}: Props) {
  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={onAddNode}
        className="bg-blue-600 text-white px-3 py-2 rounded-md flex items-center gap-2"
      >
        <Plus size={16} />
        Add Node
      </button>
    </div>
  );
}