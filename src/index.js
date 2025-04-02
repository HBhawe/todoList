"use strict";

// IMPORTS
import "./styles.css";
import { createToDo } from "./toDoCreate.js";
import {
  renderToDoList,
  renderLocalStorage,
  renderToDOinProject,
} from "./toDoRender.js";
import { saveToDotoLocalStorage } from "./localStorageSave.js";
import { createProject, promptProject } from "./projectCreate.js";

// QUERY SELECTOR
const toDoList = document.querySelector(".toDoList");
const newProject = document.querySelector(".new-project");
const contentDiv = document.querySelector("#content");
const clearStorage = document.querySelector(".clear");
const modalProject = document.querySelector("#projectModal");
const modalBtn = document.querySelector(".modal-project");
const closeModalBtn = document.querySelector(".cancel-modal");
const projectForm = document.querySelector("#projectName");
const btnSubmit = document.querySelector(".submit");

// SETUP
// dummy variable to get the data from the local storage
// var dummy = JSON.parse(localStorage.getItem("ToDo"));
var dummy = localStorage.getItem("ToDo");
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
const showModal = function (event) {
  modalProject.showModal();
};

// close the modal
const closeModal = function (event) {
  modalProject.close();
};

// EVENT LISTENERS
// window.addEventListener("load", renderLocalStorage(toDoList));
newProject.addEventListener("click", createProjectFn);

// using event bubbling to add event listeners to dynamically created elements
contentDiv.addEventListener("click", (e) => {
  const project = e.target.dataset.project;
  if (project) {
    const toDoText = createToDo();
    if (toDoText === "" || toDoText == "null") {
    } else if (toDoText) {
      const todoString = String(toDoText);
      renderToDOinProject(todoString, project);
      saveToDotoLocalStorage(project, todoString, toDos);
    }
  }
});

clearStorage.addEventListener("click", clearLocalStorage);
modalBtn.addEventListener("click", (e) => showModal(e));
closeModalBtn.addEventListener("click", (e) => closeModal(e));

// form for project names
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new Object();
  const formData = new FormData(projectForm, btnSubmit);
  for (const [key, value] of formData) {
    form[key] = value;
  }
  const projectName = form.projectName;
  createProject(projectName, contentDiv, toDos);
  console.log(toDos);
  closeModal();
  projectForm.reset();
});
