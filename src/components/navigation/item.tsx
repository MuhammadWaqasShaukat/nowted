"use client";

import Image from "next/image";
import React from "react";

interface ItemProps {
  icon: string;
  title: string;
}

const Item = ({ icon, title }: ItemProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 py-3 w-full hover:bg-white/10">
      <Image src={`/${icon}`} height={20} width={20} alt={icon} />
      <p className="text-white text-sm truncate">{title}</p>
    </div>
  );
};

export default Item;
