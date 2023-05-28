"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main className="flex min-h-screen w-full py-6">
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
