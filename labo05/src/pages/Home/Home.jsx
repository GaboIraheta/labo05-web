import React, { useState, useEffect } from "react";
import Header from "../../components/header/header.jsx";
import ViewTasks from "../../components/ViewTasks/container/viewTask.css";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      {/*<Header /*handleAddTask={addTask}*/ />*/}
      {
        <ViewTasks
        //tasks={tasks}
        //deleteTaskById={deleteTaskById}
        //onCompletedTask={toggleTaskCompletedById}
        />
      }
    </div>
  );
};
export default Home;
