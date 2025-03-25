"use strict";

// IMPORTS
import "./styles.css";
import { pageLoad } from "./pageLoad";
import { menuLoad } from "./menuLoad";
import { aboutLoad } from "./aboutLoad";

// QUERY SELECTORS
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

// TAB-CHANGE FUNCTION
const changeTab = function (event) {
  const id = event.target.id;
  content.innerHTML = "";
  if (id === "home-button") {
    pageLoad(content);
  } else if (id === "menu-button") {
    menuLoad(content);
  } else if (id === "about-button") {
    aboutLoad(content);
  }
};

// EVENT LISTENERS
window.addEventListener("load", pageLoad(content));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeTab(e);
  });
});
