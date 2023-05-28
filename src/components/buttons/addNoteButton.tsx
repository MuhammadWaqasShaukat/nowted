import Image from "next/image";
import React from "react";

const AddNoteButton = () => {
  return (
    <button className="w-full flex flex-row justify-center items-center bg-white/5 text-white py-3 rounded-sm hover:bg-white/10">
      <Image src={"/add-icon.svg"} width={24} height={24} alt="add note btn" />
      &nbsp; New Note
    </button>
  );
};

export default AddNoteButton;
