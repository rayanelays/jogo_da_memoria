const inputElemento = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const listTasks = [];
let id = 0;

function addTask(){
    const tasKItemContainer = document.createElement("div");
    tasKItemContainer.classList.add("task-item");

    const taskContent = document.createElement("p");
    taskContent.innerText = inputElemento.value;
    taskContent.id = id

    

    const removeButton = document.createElement("button");
    removeButton.innerText = "delete";
    removeButton.id = id
    removeButton.addEventListener("click", () => deleteTasks(removeButton.id));

    

    tasKItemContainer.appendChild(taskContent);
    tasksContainer.appendChild(tasKItemContainer);
    tasKItemContainer.appendChild(removeButton);

    if(inputElemento.value != ""){
        listTasks.push(inputElemento.value);
    }
    inputElemento.value = "";
    id++
}


addTaskButton.addEventListener("click", () => addTask());
function deleteTasks(id){
    listTasks.splice(id, 1)
    document.getElementById(id).remove()
    document.getElementById(id).remove()
}