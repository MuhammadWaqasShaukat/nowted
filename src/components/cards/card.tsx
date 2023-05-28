import { NoteProps } from "@/types/interfaces";
import React from "react";

const Card = (item: NoteProps) => {
  return (
    <div className="p-5 bg-white/5 rounded-sm gap-2  my-3 hover:bg-white/10 flex-col flex">
      <h1 className="font-bold">{item.title}</h1>
      <div className="flex flex-row  text-xs justify-start items-center gap-2 w-full ">
        <div className=" text-white/70">{item.date}</div>
        <div className="truncate text-white/90">{item.content}</div>
      </div>
    </div>
  );
};

export default Card;
