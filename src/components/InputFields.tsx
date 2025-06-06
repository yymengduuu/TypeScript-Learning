import React, { useRef } from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function InputFields({
  task,
  setTask,
  tasks,
  setTasks,
  handleSubmit,
}: Props) {
  return (
    <div className="input-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button className="btn-input" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
