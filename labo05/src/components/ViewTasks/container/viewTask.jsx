import React from "react";
import Task from "../../task/card/Task.jsx";
import CounterTasks from "../counter/counterTasks.jsx";
import "./viewTask.css";
const ViewTasks = ({ tasks, deleteTaskById, onCompletedTask }) => {
  return (
    <section className="tasks-container">
      {<CounterTasks tasks={tasks} />}
      <div className="list-tasks">
        {
          <Task
            key={task.id}
            task={task}
            deleteTaskById={deleteTaskById}
            onCompletedTask={onCompletedTask}
          />
        }
      </div>
    </section>
  );
};
export default ViewTasks;
