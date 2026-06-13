import type { Node } from "@xyflow/react";

interface Props {
  node: Node;
  updateNode: (
    field: string,
    value: any
  ) => void;
}

export default function RuntimeTab({
  node,
  updateNode,
}: Props) {
    const value = Number(
  node.data.value ?? 0
);

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium">
          CPU Usage
        </label>

        <div className="mt-3 flex gap-3 items-center">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) =>
              updateNode(
                "value",
                Number(
                  e.target.value
                )
              )
            }
            className="flex-1"
          />

          <input
            type="number"
            min={0}
            max={100}
            value={value}
            onChange={(e) =>
              updateNode(
                "value",
                Number(
                  e.target.value
                )
              )
            }
            className="w-20 border rounded-md p-2"
          />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500">
          Current Usage
        </p>

        <p className="text-xl font-semibold">
          {value}%
        </p>
      </div>
    </div>
  );
}