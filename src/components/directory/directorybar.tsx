"use client";
import { ListProps } from "@/types/interfaces";
import React from "react";
import { activeDirectory } from "./mock-data";
import Card from "../cards/card";

const diretory: ListProps = {
  title: "Personal",
  list: activeDirectory,
};

const Directorybar = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-5 h-screen">
      <div>
        <h1>{diretory.title}</h1>
      </div>
      <div className="flex-col overflow-auto scrollbar-rounded-3xl scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-gray">
        {activeDirectory?.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Directorybar;
