import { FaGithub } from "react-icons/fa";

import {
  SiPostgresql,
  SiRedis,
  SiMongodb,
} from "react-icons/si";

import { TbCube } from "react-icons/tb";

import { PiSquaresFourFill } from "react-icons/pi";

import { TbTopologyStar3 } from "react-icons/tb";

export default function LeftRail() {
  return (
    <aside className="w-[72px] border-r border-[#162038] bg-[#090d14] flex justify-center">

<div className="mt-16 w-[46px] rounded-[16px] bg-black border border-[#162038] py-4 flex flex-col items-center gap-5">
        {/* GitHub */}
        <div className="w-9 h-9 rounded-lg bg-[#0f1f44] flex items-center justify-center">
          <FaGithub
            size={20}
            className="text-white"
          />
        </div>

        {/* PostgreSQL */}
        <SiPostgresql
          size={20}
          color="#6FA8FF"
        />

        {/* Redis */}
        <SiRedis
          size={20}
          color="#EF4444"
        />

        {/* Mongo */}
        <SiMongodb
          size={20}
          color="#5AC85A"
        />

        {/* White Cube */}
        <TbCube
          size={20}
          color="#E5E7EB"
        />

        {/* Yellow Blocks */}
        <PiSquaresFourFill
          size={20}
          color="#FACC15"
        />

        {/* Green Network */}
        <TbTopologyStar3
          size={20}
          color="#14D9A6"
        />

      </div>

    </aside>
  );
}