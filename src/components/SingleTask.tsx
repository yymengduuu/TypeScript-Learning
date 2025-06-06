//import React, { useState, useRef, useEffect } from "react";
import type { Task } from "../model.ts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
//import { Draggable } from "@hello-pangea/dnd";

interface Props {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function SingleTask({ task, tasks, index, setTasks }: Props) {
  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleComplete = () => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

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
      {!task.isDone ? (
        <span className="task-text">{task.text}</span>
      ) : (
        <s className="task-text">{task.text}</s>
      )}

      <div>
        <span className="icon">
          <AiFillEdit className="icon-edit" />
        </span>
        <span className="icon" onClick={handleDelete}>
          <AiFillDelete className="icon-delete" />
        </span>
        <span className="icon" onClick={handleComplete}>
          <MdDone className="icon-done" />
        </span>
      </div>
    </div>
  );
}
