import React, { useState } from "react";
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.text);

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
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="single-task"
          key={index}
          style={styles}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              className="task-edit"
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
            <span className="icon" onClick={edit ? handleEdit : handleComplete}>
              <MdDone className="icon-done" />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
}
