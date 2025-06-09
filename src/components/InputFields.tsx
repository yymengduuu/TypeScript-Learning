import React, { useRef } from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function InputFields({ task, setTask, handleSubmit }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input-form"
        onSubmit={(e) => {
          handleSubmit(e);
          inputRef.current?.blur();
        }}
      >
        <input
          className="input-field"
          name="task"
          type="text"
          placeholder="Add a new task"
          value={task}
          ref={inputRef}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn-input" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
