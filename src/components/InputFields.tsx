//import React, { useRef } from "react";

export default function InputFields() {
  return (
    <div className="input-container">
      <form className="input-form">
        <input
          className="input-field"
          type="text"
          placeholder="Add a new task"
        ></input>
        <button className="btn-input">Add</button>
      </form>
    </div>
  );
}
