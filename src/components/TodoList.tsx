import React from "react";
import SingleTask from "./SingleTask.tsx";
import type { Task } from "../model";
// import { Droppable } from "@hello-pangea/dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export default function TodoList({ tasks, setTasks }: Props) {
  return (
    <div className="todo-list">
      <form className="task-todo">
        <span className="task-title">Active Tasks</span>
        {tasks.map((task, index) => (
          <SingleTask
            key={task.id}
            task={task}
            tasks={tasks}
            index={index}
            setTasks={setTasks}
          />
        ))}
      </form>
      <form className="task-completed">
        <span className="task-title">Completed Tasks</span>
      </form>
    </div>
  );
}
