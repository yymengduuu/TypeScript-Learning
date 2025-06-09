import React, { useState, useRef, useEffect } from "react";
import type { Task } from "../model.ts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";

interface Props {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function SingleTask({ task, tasks, index, setTasks }: Props) {
  console.log("rendering task", task.text, "with color", task.color);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.text);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, text: editTask } : t))
    );
    setEdit(false);
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleComplete = () => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <form
          className="single-task"
          key={index}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div
            className="single-task-inner"
            style={{ backgroundColor: task.color, color: "#fff" }}
          >
            {edit ? (
              <input
                className="task-edit"
                name="task"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleEdit(e);
                  }
                }}
              />
            ) : !task.isDone ? (
              <span className="task-text">{task.text}</span>
            ) : (
              <s className="task-text">{task.text}</s>
            )}
            <div>
              <span className="icon" onClick={() => setEdit(!edit)}>
                <AiFillEdit className="icon-edit" />
              </span>
              <span className="icon" onClick={handleDelete}>
                <AiFillDelete className="icon-delete" />
              </span>
              <span
                className="icon"
                onClick={edit ? handleEdit : handleComplete}
              >
                <MdDone className="icon-done" />
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
}
