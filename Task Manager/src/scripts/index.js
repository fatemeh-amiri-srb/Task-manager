const addBtn = document.querySelector(".addTaskBtn");
const clearAllBtn = document.querySelector(".clearAllBtn");

addBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAll);

let counter = 0;
function addTask() {
  counter += 1;

  let taskDescription = document.querySelector(".textBox").value;
  if (taskDescription != "") {
    sessionStorage.setItem("newTask", taskDescription);

    const taskContainer = document.createElement("div");
    taskContainer.className = "task-container";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "taskItem";
    const taskDscrpn = document.createElement("label");
    taskDscrpn.className = "taskDescription";
    taskDscrpn.htmlFor = "taskItem";
    taskDscrpn.textContent = taskDescription;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskDscrpn);

    const tasksBox = document.querySelector(".tasks-box");
    tasksBox.appendChild(taskContainer);
  }

  localStorage.setItem("" + counter, taskContainer);

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskDscrpn.style.textDecoration = "line-through";
    } else {
      taskDscrpn.style.textDecoration = "none";
    }
  });

  sessionStorage.clear();
  document.querySelector(".textBox").value = "";
}

function clearAll() {
  const Box = document.querySelector(".tasks-box");
  Box.innerHTML = "";
  localStorage.clear();
}
