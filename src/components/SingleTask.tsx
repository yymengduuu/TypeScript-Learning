//import React, { useState, useRef, useEffect } from "react";
import type { Task } from "../model.ts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
//import { Draggable } from "@hello-pangea/dnd";

interface Props {
  index: number;
  task: Task;
}

export default function SingleTask({ task, index }: Props) {
  const styles = {
    backgroundColor: task.color,
    color: "#fff",
    width: "300px",
    height: "30px",
    margin: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  };

  return (
    <div className="single-task" key={index} style={styles}>
      <span className="task-text">{task.text}</span>
      <div>
        <span className="icon">
          <AiFillEdit className="icon-edit" />
        </span>
        <span className="icon">
          <AiFillDelete className="icon-delete" />
        </span>
        <span className="icon">
          <MdDone className="icon-done" />
        </span>
      </div>
    </div>
  );
}
