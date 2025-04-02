"use strict";

// IMPORTS
import "./styles.css";
import { createToDo } from "./toDoCreate.js";
import { renderToDoInProject } from "./toDoRender.js";
import { saveToDotoLocalStorage } from "./localStorageSave.js";
import { renderProject } from "./projectRender.js";
import { renderLocalStorage } from "./localStorageRender.js";

// QUERY SELECTORS
const contentDiv = document.querySelector("#content");
const clearStorage = document.querySelector(".clear");
const modalProject = document.querySelector("#projectModal");
const modalBtn = document.querySelector(".modal-project");
const closeModalBtn = document.querySelector(".cancel-modal");
const projectForm = document.querySelector("#projectName");
const btnSubmit = document.querySelector(".submit");

// SETUP
// dummy variable to get the data from the local storage
var dummy = localStorage.getItem("ToDo");

// if the dummy variable is null, we create a new Array, otherwise we use the parsed JSON from the dummy
// variable

// initalise it as a global variable
let toDos;

if (dummy !== null) {
  toDos = JSON.parse(dummy);
  renderLocalStorage(toDos, contentDiv);
} else {
  toDos = new Object();
}

// FUNCTIONS
// for dev purposes only
const clearLocalStorage = function () {
  localStorage.clear();
  location.reload();
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

// using event bubbling to add event listeners to dynamically created elements
contentDiv.addEventListener("click", (e) => {
  const project = e.target.dataset.project;
  if (project) {
    const toDoText = createToDo();
    if (toDoText === "" || toDoText == "null") {
    } else if (toDoText) {
      const todoString = String(toDoText);
      renderToDoInProject(todoString, project);
      saveToDotoLocalStorage(project, todoString, toDos);
    }
  }
});

// clear local storage
clearStorage.addEventListener("click", clearLocalStorage);

// event listener to hide and show form
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
  renderProject(projectName, contentDiv, toDos);
  closeModal();
  projectForm.reset();
});
