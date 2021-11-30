import React from "react";
import { TASKS } from "../data";
import Task from "./Task"

function TaskList() {
  const tasksMap = TASKS.map((task)=>{
    return <Task key={task.text} text={task.text} category={task.category}></Task>
    
  })
  return (
    <div className="tasks">
      {tasksMap}
    </div>
  );
}

export default TaskList;
