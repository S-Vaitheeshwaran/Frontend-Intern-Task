import {
  Handle,
  Position,
} from "@xyflow/react";

import {
  Settings,
  Cpu,
  HardDrive,
  Server,
} from "lucide-react";

import {
  SiPostgresql,
  SiRedis,
  SiMongodb,
} from "react-icons/si";

interface Props {
  data: {
    label: string;
    status: string;
    value: number;
  };
}

export default function ServiceNode({
  data,
}: Props) {
  const statusClass =
    data.status === "Healthy"
      ? "bg-green-900 text-green-400"
      : "bg-red-900 text-red-400";

  const renderIcon = () => {
    if (
      data.label
        .toLowerCase()
        .includes("postgres")
    ) {
      return (
        <SiPostgresql
          size={20}
          className="text-[#336791]"
        />
      );
    }

    if (
      data.label
        .toLowerCase()
        .includes("redis")
    ) {
      return (
        <SiRedis
          size={20}
          className="text-[#dc382d]"
        />
      );
    }

    return (
      <SiMongodb
        size={20}
        className="text-[#13aa52]"
      />
    );
  };

  return (
    <div className="w-[360px] h-[220px] bg-black border border-[#1f2937] rounded-3xl p-5 text-white shadow-2xl">

      <Handle
        type="target"
        position={Position.Top}
      />

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            {renderIcon()}
          </div>

          <h3 className="text-xl font-semibold">
            {data.label}
          </h3>

        </div>

        <div className="flex items-center gap-2">

          <div className="border border-green-500 text-green-400 rounded-lg px-2 py-1 text-[11px]">
            $0.03/HR
          </div>

          <button className="w-8 h-8 rounded-lg bg-[#111827] flex items-center justify-center">
            <Settings size={14} />
          </button>

        </div>

      </div>

      {/* Metrics */}
      <div className="grid grid-cols-4 mt-4 text-center">

        <div>
          <p className="text-sm">0.02</p>
          <p className="text-gray-400 text-xs mt-1">
            CPU
          </p>
        </div>

        <div>
          <p className="text-sm">0.05 GB</p>
          <p className="text-gray-400 text-xs mt-1">
            Memory
          </p>
        </div>

        <div>
          <p className="text-sm">10.00 GB</p>
          <p className="text-gray-400 text-xs mt-1">
            Disk
          </p>
        </div>

        <div>
          <p className="text-sm">1</p>
          <p className="text-gray-400 text-xs mt-1">
            Region
          </p>
        </div>

      </div>

      {/* Tabs */}
      <div className="bg-[#111827] rounded-xl p-1.5 mt-4 flex gap-1">

        <button className="bg-white text-black rounded-lg px-3 py-1.5 flex items-center gap-1 text-xs">
          <Cpu size={12} />
          CPU
        </button>

        <button className="px-3 py-1.5 text-xs">
          Memory
        </button>

        <button className="px-3 py-1.5 flex items-center gap-1 text-xs">
          <HardDrive size={12} />
          Disk
        </button>

        <button className="px-3 py-1.5 flex items-center gap-1 text-xs">
          <Server size={12} />
          Region
        </button>

      </div>

      {/* Slider */}
      <div className="mt-4">

        <div className="flex items-center gap-3">

          <input
            type="range"
            min={0}
            max={100}
            value={data.value}
            readOnly
            className="flex-1"
          />

          <div className="w-20 bg-black border border-[#374151] rounded-lg py-1.5 text-center text-sm">
            {data.value.toFixed(2)}
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">

        <div
          className={`px-3 py-1.5 rounded-lg text-xs ${statusClass}`}
        >
          {data.status}
        </div>

        <div className="text-orange-400 text-2xl font-bold">
          aws
        </div>

      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />

    </div>
  );
}