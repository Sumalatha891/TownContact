const tasks = [
    {
      title: "Task-1",
      description: "Lorem ipsum dolor sit amet.",
      status: "pending",
      created: "11-07-2024",
    },
    {
      title: "Task-2",
      description: "Lorem ipsum dolor sit amet.",
      status: "completed",
      created: "11-07-2024",
    },
    {
      title: "Task-3",
      description: "Lorem ipsum dolor sit amet.",
      status: "completed",
      created: "11-07-2024",
    },
    {
      title: "Task-4",
      description: "Lorem ipsum dolor sit amet.",
      status: "pending",
      created: "11-07-2024",
    },
    {
      title: "Task-5",
      description: "Lorem ipsum dolor sit amet.",
      status: "completed",
      created: "11-07-2024",
    },
    {
      title: "Task-6",
      description: "Lorem ipsum dolor sit amet.",
      status: "pending",
      created: "11-07-2024",
    },
  ];
  function displayTasks() {
    const taskAdd = document.getElementById("taskAdd");
    taskAdd.innerHTML = " ";
    tasks.map((task) => {
      const div = document.createElement("div");
      div.innerHTML = `  <div class="task" id="taskitem">
            <h2>${task.title}</h2>
            <p>Description:${task.description}</p>
            <p>Status:${task.status}</p>
            <p>Created: ${task.created}</p>
            <button class="edit-btn" onclick="editHandler()">Edit</button>
            <button class="delete-btn" onclick="deleteHandler()">Delete</button>
          </div>`;
      taskAdd.appendChild(div);
    });
  }
  function editHandler() {
    console.log("hiii")
  }
  function deleteHandler(index) {
    tasks.splice(index, 1);
    displayTasks();
    // console.log(tasks)
  }
  displayTasks();
  
  let tasks1 = [];
  function displayaddTask(task) {
    const taskList = document.getElementById("tasks1");
    const taskElement = document.getElementById("div");
    taskElement.innerHTML = `<h3>${task.title}</h3>
  <p>Description:${task.description}</p>
  <p>${task.status}</p>`;
    taskList.appendChild(taskElement);
  }
  function formHandler(e) {
    e.preventDefault();
  
    let title = document.getElementById("task-title").value;
    let description = document.getElementById("task-description").value;
    let status = document.getElementById("task-status").value;
    const newTask = {
      title: title,
      Description: description,
      Status: status,
    };
    console.log("new task:", newTask);
    tasks.push(newTask);
    displayTasks();
    document.getElementById("taskForm").reset();
  }
  document.addEventListener("DOMContentLoaded",function () {
    displayTasks();
    const form = document.getElementById("taskForm");
    form.addEventListener("submit", formHandler);
  });
  