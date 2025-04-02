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
export const renderProject = function (projectName, container, todoObject) {
  const markup = `<div class="project"><h3>${projectName}</h3><button class="new-to-do" data-project="${projectName}">New To Do in ${projectName}</button><ul id="${projectName}"></ul></div>`;
  container.insertAdjacentHTML("beforeend", markup);
  todoObject[projectName] = new Array();
};
