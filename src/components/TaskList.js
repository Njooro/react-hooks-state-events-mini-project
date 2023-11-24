import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskDelete }) => {
  const handleTaskDelete = (id) => {
    onTaskDelete(tasks.filter((task) => task.id !== id));
  };
}
function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskDelete={handleTaskDelete} />
      ))}

    </div>
  );
}

export default TaskList;
