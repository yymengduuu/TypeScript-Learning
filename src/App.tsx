import React, { useState } from "react";
import "./index.css";
import InputFields from "./components/InputFields";
import TodoList from "./components/TodoList";
import type { Task } from "./model.ts";
import { DragDropContext } from "@hello-pangea/dnd";
//import type { DropResult } from "@hello-pangea/dnd";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const colorPlatte = [
    "#7c3aed",
    "#6d28d9",
    "#3b82f6",
    "#0ea5e9",
    "#9333ea",
    "#6366f1",
    "#8b5cf6",
  ];
  const randomColor =
    colorPlatte[Math.floor(Math.random() * colorPlatte.length)];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        { id: Date.now(), text: task, color: randomColor, isDone: false },
        ...tasks,
      ]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <header>Taskify</header>
      <InputFields task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        completedTask={completedTasks}
        setCompletedTask={setCompletedTasks}
      />
    </div>
  );
}
