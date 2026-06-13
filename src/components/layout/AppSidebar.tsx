import {
  Search,
  Plus,
  ChevronRight,
} from "lucide-react";

import { useApps } from "@/hooks/useApps";
import { useAppStore } from "@/store/appStore";

import { FaRegLightbulb } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbRocket } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";
import { PiPuzzlePieceBold } from "react-icons/pi";

const colors = [
  "bg-indigo-600",
  "bg-purple-500",
  "bg-red-500",
  "bg-pink-500",
  "bg-violet-500",
];

const appIcons = [
  <FaRegLightbulb size={12} />,
  <IoSettingsOutline size={12} />,
  <TbRocket size={12} />,
  <LuClipboardList size={12} />,
  <PiPuzzlePieceBold size={12} />,
];

export default function AppSidebar() {
  const { data } = useApps();

  const {
    selectedAppId,
    setSelectedAppId,
  } = useAppStore();

  return (
    <div className="absolute left-4 top-4 w-[285px] h-[360px] bg-black rounded-2xl border border-[#1f2937] overflow-hidden z-50 flex flex-col">

      {/* Header */}
      <div className="p-3">

        <h2 className="text-[13px] font-semibold text-white mb-4">
          Application
        </h2>

        <div className="flex items-center gap-2">

          <div className="relative flex-1">

            <input
              placeholder="Search..."
              className="w-full h-8 pl-3 pr-8 bg-[#161b22] border border-[#232b36] rounded-md text-[12px] text-white outline-none"
            />

            <Search
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />

          </div>

          <button className="w-8 h-8 rounded-md bg-[#2563eb] hover:bg-[#3b82f6] flex items-center justify-center transition-colors">
            <Plus size={14} />
          </button>

        </div>

      </div>

      {/* Application List */}
      <div className="px-2 pb-2 flex-1 overflow-y-auto">

        {data?.map((app, index) => (

          <button
            key={app.id}
            onClick={() =>
              setSelectedAppId(app.id)
            }
            className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg mb-1 transition-all ${
              selectedAppId === app.id
                ? "bg-[#060d1e]"
                : "hover:bg-[#060d1e]"
            }`}
          >

            <div
              className={`w-8 h-8 rounded-md ${
                colors[index % colors.length]
              } flex items-center justify-center text-white shrink-0`}
            >
              {appIcons[index]}
            </div>

            <span className="flex-1 text-left text-[12px] font-medium text-white truncate">
              {app.name}
            </span>

            <ChevronRight
              size={12}
              className="text-gray-500 shrink-0"
            />

          </button>

        ))}

      </div>

    </div>
  );
}