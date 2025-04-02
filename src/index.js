"use strict";

// IMPORTS
import "./styles.css";
import { createToDo } from "./createToDo";
import { renderToDoList, renderLocalStorage } from "./renderToDo";
import { saveToDotoLocalStorage } from "./saveToLocalStorage";

// QUERY SELECTOR
const toDoList = document.querySelector(".toDoList");
const btnToDo = document.querySelector(".btn-todo");

// FUNCTIONS

// dummy variable to get the data from the local storage
var dummy = JSON.parse(localStorage.getItem("todo"));

// if the dummy variable is null, we create a new Array, otherwise we use the dummy variable
const toDos = dummy !== null ? dummy : new Array();

const addToDo = function () {
  const toDoText = createToDo();
  if (toDoText === "" || toDoText == "null") {
  } else if (toDoText) {
    renderToDoList(toDoText, toDoList);
    saveToDotoLocalStorage(toDoText, toDos);
  }
};

// EVENT LISTENERS
btnToDo.addEventListener("click", addToDo);
window.addEventListener("load", renderLocalStorage(toDoList));
