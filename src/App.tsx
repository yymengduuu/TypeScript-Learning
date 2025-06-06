//import React, { useState } from "react";
import "./index.css";
import InputFields from "./components/InputFields";
import TodoList from "./components/TodoList";
//import { DragDropContext } from "@hello-pangea/dnd";
//import type { DropResult } from "@hello-pangea/dnd";

export default function App() {
  return (
    <div className="App">
      <header>Taskify</header>
      <InputFields />
      <TodoList />
    </div>
  );
}
