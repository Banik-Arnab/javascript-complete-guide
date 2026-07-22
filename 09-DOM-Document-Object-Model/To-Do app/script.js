const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
displayTasks();

addBtn.addEventListener("click", addTask);

function addTask() {

    const task = taskInput.value.trim();

    if(task === "") return;

    tasks.push(task);

    saveTasks();

    displayTasks();

    taskInput.value = "";
}

function displayTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button class="delete">Delete</button>
        `;

        li.querySelector(".delete").addEventListener("click",()=>{

            tasks.splice(index,1);

            saveTasks();

            displayTasks();

        });

        taskList.appendChild(li);

    });

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}