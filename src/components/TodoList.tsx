import React from "react";
import SingleTask from "./SingleTask.tsx";
import type { Task } from "../model";
import { Droppable } from "@hello-pangea/dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export default function TodoList({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) {
  return (
    <div className="todo-list">
      <Droppable droppableId="ActiveTasks">
        {(provided) => (
          <form
            className="task-todo"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
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
            {provided.placeholder}
          </form>
        )}
      </Droppable>
      <Droppable droppableId="CompletedTasks">
        {(provided) => (
          <form
            className="task-completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="task-title">Completed Tasks</span>
            {completedTasks.map((task, index) => (
              <SingleTask
                key={task.id}
                task={task}
                tasks={completedTasks}
                index={index}
                setTasks={setCompletedTasks}
              />
            ))}
            {provided.placeholder}
          </form>
        )}
      </Droppable>
    </div>
  );
}
