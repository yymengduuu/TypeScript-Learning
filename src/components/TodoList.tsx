// import React from "react";
// import type { Task } from "../model.ts";
// import SingleTask from "./SingleTask.tsx";
// import { Droppable } from "@hello-pangea/dnd";

export default function TodoList() {
  return (
    <div className="todo-list">
      <form className="task-todo">
        <span className="task-text">Active Tasks</span>
      </form>
      <form className="task-completed">
        <span className="task-text">Active Tasks</span>
      </form>
    </div>
  );
}
