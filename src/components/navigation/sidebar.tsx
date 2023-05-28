"use client";
import React from "react";
import Header from "../header";
import AddNoteButton from "../buttons/addNoteButton";
import List from "./list";
import { IconButton, ListProps } from "@/types/interfaces";

const notes: ListProps = {
  title: "Recents",
  list: [
    { icon: "note-icon.svg", title: "Item 1 Some Thing Inportant" },
    { icon: "note-icon.svg", title: "Item 2 Some Thing very very important" },
    { icon: "note-icon.svg", title: "Item 3 Least Important" },
    { icon: "note-icon.svg", title: "Item 4 Watching movies" },
    { icon: "note-icon.svg", title: "Item 5 listening to others" },
  ],
};

const folders: ListProps = {
  title: "Folders",
  list: [
    { icon: "folder-icon.svg", title: "Personal" },
    { icon: "folder-icon.svg", title: "Work" },
    { icon: "folder-icon.svg", title: "Events" },
    { icon: "folder-icon.svg", title: "Places" },
    { icon: "folder-icon.svg", title: "Finance" },
  ],
};

const more: ListProps = {
  title: "More",
  list: [
    { icon: "star-icon.svg", title: "Favorites" },
    { icon: "trash-icon.svg", title: "Trash" },
    { icon: "archive-icon.svg", title: "Archived" },
  ],
};

const Sidebar = () => {
  const _action: IconButton = {
    icon: "add-directory-icon.svg",
    handler: () => {
      console.log("Directory Added");
      return {};
    },
  };

  return (
    <div className="flex flex-col gap-7">
      <Header />
      <AddNoteButton />
      <List title={notes.title} list={notes.list} />
      <List title={folders.title} list={folders.list} action={_action} />
      <List title={more.title} list={more.list} />
    </div>
  );
};

export default Sidebar;
