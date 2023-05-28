"use client";
import React from "react";
import Item from "./item";
import { ListProps } from "@/types/interfaces";
import Image from "next/image";

const List = ({ title, list, action }: ListProps) => {
  return (
    <div className="flex-col flex justify-between gap-2">
      {/* List Heading  */}
      <div className="flex flex-row justify-between items-center">
        <h2>{title}</h2>
        {action ? (
          <div>
            <button>
              <Image
                src={`/${action.icon}`}
                height={20}
                width={20}
                alt="icon"
              />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col overflow-auto scrollbar-rounded-3xl scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-gray">
        {list?.map((item, index) => (
          <Item key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default List;
