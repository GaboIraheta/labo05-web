import React, { useState } from "react";
import "./Task.css";
const Task = ({ task, deleteTaskById, onCompletedTask }) => {
  const [isSelected, SetIsSelected] = useState(false);

  const HandleCheckBoxChange = () => {
    SetIsSelected(!isSelected);
    onCompletedTask(task.id);
  };

  return (
    <div className={`task`}>
      <label class="container">
        <input
          type="checkbox"
          id="check"
          checked={isSelected}
          onChange={HandleCheckBoxChange}
        ></input>
        <div class="checkmark"></div>
        <p className={`title ${isSelected ? "selected" : ""}`}>{task.title}</p>
        <button id="boton" onClick={() => deleteTaskById(task.id)}>Borrar </button>
      </label>
    </div>
  );
};

export default Task;
