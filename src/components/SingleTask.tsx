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
      <div className="icon">
        <span>
          {" "}
          <AiFillEdit className="icon-edit" />
        </span>
        <span>
          <AiFillDelete className="icon-delete" />
        </span>
        <span>
          <MdDone className="icon-done" />
        </span>
      </div>
    </div>
  );
}
