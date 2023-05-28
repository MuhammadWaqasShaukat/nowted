"use client";

import IconButton from "@/components/buttons/iconButton";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [value, setValue] = useState("");

  const handleClickActionBtn = () => {
    console.log("handle action clicked");
    return {};
  };

  return (
    <main className="flex flex-col min-h-screen gap-7 w-full py-6">
      <div className="flex flex-col gap-7 px-6">
        {/* title and action */}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Reflection on the Month of June</h1>
          <IconButton icon={"action-icon.svg"} handler={handleClickActionBtn} />
        </div>
        <div className="flex-col flex gap-4">
          <div className="flex flex-row justify-start items-center border-b-2 border-white/5 gap-11 pb-1">
            <div className="flex flex-row justify-between items-center gap-2 ">
              <Image
                src="/calendar-icon.svg"
                height={16}
                width={16}
                alt="Calendar Icon"
                className="text-white/5 mb-1"
              />
              <div>
                <span className="text-white">Date</span>
              </div>
            </div>
            <div>
              <span className="text-white">20/12/2013</span>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center border-b-2 border-white/5 gap-11 pb-1">
            <div className="flex flex-row justify-between items-center gap-2 ">
              <Image
                src="/folder-icon.svg"
                height={16}
                width={16}
                alt="Calendar Icon"
                className="text-white/5 mb-1"
              />
              <div>
                <span className="text-white">Folder</span>
              </div>
            </div>
            <div>
              <span className="text-white">Personal</span>
            </div>
          </div>
        </div>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{
          width: "100%",
          border: "none",
          borderBlock: "transparent",
        }}
      />
    </main>
  );
}
