import React, { useState } from "react";
import "./index.css";
import InputFields from "./components/InputFields";
import TodoList from "./components/TodoList";
import type { Task } from "./model.ts";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";

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
  const getRandomColor = () =>
    colorPlatte[Math.floor(Math.random() * colorPlatte.length)];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        { id: Date.now(), text: task, color: getRandomColor(), isDone: false },
        ...tasks,
      ]);
      setTask("");
    }
  };

  //    type DropResult = {
  //   draggableId: string; // 被拖动的元素 ID（你传的 task.id）
  //   source: {
  //     droppableId: string; // 起点容器 ID（比如 "ActiveTasks"）
  //     index: number;       // 在容器中的原始位置
  //   };
  //   destination: {
  //     droppableId: string; // 目标容器 ID（比如 "CompletedTasks"）
  //     index: number;       // 要插入的位置
  //   } | null;               // 拖到空白区域时为 null
  // }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    let movedTask;
    const active = [...tasks];
    const complete = [...completedTasks];

    if (source.droppableId === "ActiveTasks") {
      movedTask = active[source.index];
      active.splice(source.index, 1);
    } else {
      movedTask = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "ActiveTasks") {
      active.splice(destination.index, 0, movedTask);
    } else {
      complete.splice(destination.index, 0, movedTask);
    }

    setTasks(active);
    setCompletedTasks(complete);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header>Taskify</header>
        <InputFields
          task={task}
          setTask={setTask}
          handleSubmit={handleSubmit}
        />
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </div>
    </DragDropContext>
  );
}
