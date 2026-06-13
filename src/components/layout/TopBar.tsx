import {
  ChevronDown,
  MoreHorizontal,
  Share2,
  Moon,
} from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-[64px] bg-[#090d14] border-b border-[#1b2230] flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center">
          <div className="w-7 h-7 border-l-4 border-t-4 border-black rotate-180" />
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-lg h-12 px-4 flex items-center gap-4 min-w-[380px]">

          <div className="w-9 h-9 bg-indigo-600 rounded-md flex items-center justify-center">
            💡
          </div>

          <span className="font-medium text-white text-lg">
            supertokens-golang
          </span>

          <ChevronDown
            size={18}
            className="text-gray-400 ml-auto"
          />

          <MoreHorizontal
            size={18}
            className="text-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">

        <button className="w-11 h-11 rounded-lg border border-[#1f2937] bg-[#111827] flex items-center justify-center">
          <Share2 size={18} />
        </button>

        <button className="w-11 h-11 rounded-lg border border-[#1f2937] bg-[#111827] flex items-center justify-center">
          <Moon size={18} />
        </button>

        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
      </div>
    </header>
  );
}