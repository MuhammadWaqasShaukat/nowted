import { IconButton } from "@/types/interfaces";
import Image from "next/image";
import React from "react";

const IconButton = ({ icon, handler }: IconButton) => {
  return (
    <button type="button" onClick={handler}>
      <Image src={`/${icon}`} width={20} height={20} alt={icon} />
    </button>
  );
};

export default IconButton;
