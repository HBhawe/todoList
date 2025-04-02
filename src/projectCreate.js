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
 * The `createProject` function generates HTML markup for a new project with a specified name and
 * appends it to a container, while also initializing an empty array in a todoObject to store todos for
 * that project.
 * @param projectName - The `projectName` parameter is a string that represents the name of the project
 * being created.
 * @param container - The `container` parameter in the `createProject` function is the element where
 * the project markup will be inserted. It should be a reference to the HTML element where you want to
 * append the project markup. For example, you can pass the container element like this:
 * @param todoObject - An object that stores todo lists for each project.
 */
export const createProject = function (projectName, container, todoObject) {
  const markup = `<div class="project"><h3>${projectName}</h3><button class="new-to-do" data-project="${projectName}">New To Do in ${projectName}</button><ul id="${projectName}"></ul></div>`;
  container.insertAdjacentHTML("beforeend", markup);
  todoObject[projectName] = new Array();
};
