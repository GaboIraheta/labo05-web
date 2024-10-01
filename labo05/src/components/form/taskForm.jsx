import React, { useState } from "react";
import { MdExposurePlus1 } from "react-icons/md";
import "./taskForm.css";
const FormTask = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddTask(title);
    console.log(title);
    setTitle("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.tarjet.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="newTask-Form">
        <input
          required
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button className="newTask-button">
          Create <MdExposurePlus1 size={20} />
        </button>
      </form>
    </>
  );
};
export default FormTask;
