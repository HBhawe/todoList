"use strict";

// IMPORTS
import "./styles.css";
import { createToDo } from "./createToDo.js";
import {
  renderToDoList,
  renderLocalStorage,
  renderToDOinProject,
} from "./renderToDo.js";
import { saveToDotoLocalStorage } from "./saveToLocalStorage.js";
import { createProject, promptProject } from "./createProject.js";

// QUERY SELECTOR
const toDoList = document.querySelector(".toDoList");
const newProject = document.querySelector(".new-project");
const contentDiv = document.querySelector("#content");
const clearStorage = document.querySelector(".clear");
const modalProject = document.querySelector("#projectModal");
const modalBtn = document.querySelector(".modal-project");
const closeModalBtn = document.querySelector(".cancel-modal");

// SETUP
// dummy variable to get the data from the local storage
var dummy = JSON.parse(localStorage.getItem("todo"));
// if the dummy variable is null, we create a new Array, otherwise we use the dummy variable
const toDos = dummy !== null ? dummy : new Object();

// FUNCTIONS

// create a project
const createProjectFn = function () {
  const projectName = promptProject();
  createProject(projectName, contentDiv);
};

// for dev purposes only
const clearLocalStorage = function () {
  localStorage.clear();
  console.log(localStorage);
};

// display the modal
const showModal = function () {
  modalProject.showModal();
};

// close the modal
const closeModal = function () {
  modalProject.close();
};

// EVENT LISTENERS
window.addEventListener("load", renderLocalStorage(toDoList));
newProject.addEventListener("click", createProjectFn);

// using event bubbling to add event listeners to dynamically created elements
contentDiv.addEventListener("click", (e) => {
  const project = e.target.dataset.project;
  console.log(project);
  if (project) {
    const toDoText = createToDo();
    if (toDoText === "" || toDoText == "null" || !isNaN(toDoText)) {
    } else if (toDoText) {
      const todoString = String(toDoText);
      renderToDOinProject(todoString, project);
      saveToDotoLocalStorage(project, todoString, toDos);
    }
  }
});

clearStorage.addEventListener("click", clearLocalStorage);
modalBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", closeModal);
