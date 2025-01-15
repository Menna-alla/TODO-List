document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
  } else {
    document.body.classList.add("dark-theme");
  }
};

let taskList = "";
if (localStorage.getItem("taskes") !== null) {
  taskList = localStorage.getItem("tasks");
}

function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskStatus = "In Progress";
  taskList += `<li>${taskInput.value}<br>${new Date().toLocaleDateString()}
  `;
  localStorage.setItem("tasks", taskList);
taskInput.value = "";
showTask();

}

function showTask() {
  document.getElementById("task-list").innerHTML = localStorage.getItem("tasks");
}
showTask();

document.getElementById("add-task-btn").onclick = () => addTask();
