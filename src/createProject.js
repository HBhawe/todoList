/**
 * The promptProject function prompts the user to enter a project name and returns the entered name as
 * a string.
 * @returns The `projectName` variable, which stores the value entered by the user when prompted to
 * enter a project name, is being returned.
 */
export const promptProject = function () {
  const projectName = String(prompt("Enter project name:"));
  return projectName;
};

/**
 * The `createProject` function generates HTML markup for a project with a specified name and appends
 * it to a container element.
 * @param projectName - The `projectName` parameter is a string that represents the name of the project
 * for which you want to create a new section in the container.
 * @param container - The `container` parameter in the `createProject` function is the element where
 * the project markup will be inserted. It should be a reference to the HTML element where you want to
 * add the project. For example, you can pass a reference to a div element with an id of
 * "projects-container"
 */
export const createProject = function (projectName, container) {
  const markup = `<div class="project"><h3>${projectName}</h3><button class="new-to-do" data-project="${projectName}">New To Do in ${projectName}</button><ul id="${projectName}"></ul></div>`;
  container.insertAdjacentHTML("beforeend", markup);
};
