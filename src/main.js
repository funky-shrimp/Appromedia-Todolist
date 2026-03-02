import "./style.css";

import "./elements/task.js";

const addTaskBtn = document.querySelector("#addTask-btn");

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskInput = document.querySelector("#input-task");
  const taskName = taskInput.value.trim();

  if (taskName) {
    const taskList = document.querySelector("#tasks-list");
    const newTask = document.createElement("task-item");

    newTask.setAttribute("taskName", taskName);
    newTask.setAttribute("isCompleted", false);

    newTask.addEventListener("task_check", () => {
      const isCompleted = newTask.getAttribute("isCompleted") === "true";
      newTask.setAttribute("isCompleted", !isCompleted);
      newTask.classList.toggle("completed", !isCompleted);
    });

    newTask.addEventListener("task_delete", () => {
      taskList.removeChild(newTask);
    });

    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});


