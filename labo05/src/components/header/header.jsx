import React, { useState } from "react";
import LogoTodo from "../../assets/icons/todoLogo.svg";
import FormTask from "../form/taskForm.jsx";
import "./header.css";
const Header = ({ handleAddTask }) => {
  return (
    <header className="header-container">
      <img src={LogoTodo} />
      {<FormTask handleAddTask={handleAddTask} />}
    </header>
  );
};
export default Header;
