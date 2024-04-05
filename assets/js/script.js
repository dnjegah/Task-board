// Retrieve tasks and nextId from localStorage
const taskList = JSON.parse(localStorage.getItem("tasks"));
const nextId = JSON.parse(localStorage.getItem("nextId"));
let inputTaskTitle = document.querySelector("#inputTaskTitle");
let inputDate = document.querySelector("#inputDate");
let inputTask = document.querySelector("#inputTask");
let addTask = document.querySelector("#addTask");
let formModal = document.querySelector("#formModal");
let toDoCards = document.querySelector("#todo-cards");
flatpickr("inputDate", {});

console.log(taskList)

let task = [];

console.log(task)
// Todo: create a function to generate a unique task id
function generateTaskId() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let taskId = "";
    for (let i = 0; i < 10; i++){
        taskId += characters.charAt(Math.floor(Math.random()))
    }
    return taskId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
