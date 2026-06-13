import type { Node } from "@xyflow/react";

interface Props {
  node: Node;
  updateNode: (
    field: string,
    value: any
  ) => void;
}

export default function ConfigTab({
  node,
  updateNode,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">
          Node Name
        </label>

        <input
          type="text"
        value={String(node.data.label ?? "")}
          onChange={(e) =>
            updateNode(
              "label",
              e.target.value
            )
          }
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          Description
        </label>

        <textarea
          rows={4}
          value={String(node.data.description ?? "")}
          onChange={(e) =>
            updateNode(
              "description",
              e.target.value
            )
          }
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>
    </div>
  );
}