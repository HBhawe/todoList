export const promptProject = function () {
  const projectName = String(prompt("Enter project name:"));
  return projectName;
};

export const createProject = function (projectName, container) {
  const markup = `<div class="project"><h3>${projectName}</h3><button class="new-to-do" data-project="${projectName}">New To Do in ${projectName}</button><ul id="${projectName}"></ul></div>`;
  container.insertAdjacentHTML("beforeend", markup);
};
