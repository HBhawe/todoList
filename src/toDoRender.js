/**
 * The `renderToDoList` function takes a to-do item text and a container element, then appends a new
 * list item with the to-do text to the container.
 * @param toDoText - The `toDoText` parameter is the text content of a to-do item that you want to
 * render in the to-do list.
 * @param container - The `container` parameter in the `renderToDoList` function refers to the HTML
 * element where you want to insert the to-do item. It could be a `<ul>` or `<ol>` element where the
 * to-do item will be added as a `<li>` element.
 */
export const renderToDoList = function (toDoText, container) {
  const markup = `<li>${toDoText}</li>`;
  container.insertAdjacentHTML("beforeend", markup);
};

/**
 * The function `renderLocalStorage` retrieves to-do items from local storage and renders them as list
 * items in a specified container.
 * @param container - The `container` parameter in the `renderLocalStorage` function is a reference to
 * the HTML element where the todo items will be rendered. It is the element that will receive the
 * generated markup for each todo item stored in the local storage.
 */
export const renderLocalStorage = function (container) {
  //   const toDos = localStorage.getItem("ToDo");
  //   if (toDos !== null) {
  //     toDos.forEach((todo) => {
  //       const text = todo.text;
  //       const markup = `<li>${text}</li>`;
  //       container.insertAdjacentHTML("beforeend", markup);
  //     });
  //   }
};

/**
 * The function `renderToDOinProject` appends a new to-do item to a specified target element in the
 * DOM.
 * @param toDotext - The `toDotext` parameter is the text content that you want to render as a new
 * To-Do item in the specified project list.
 * @param target - The `target` parameter is the ID of the HTML element where you want to render the
 * To-Do item. It is used to select the specific element in the DOM where the To-Do item will be
 * appended.
 */
export const renderToDoInProject = function (toDotext, target) {
  const projectList = document.querySelector(`#${target}`);
  const markup = `<li>${toDotext}</li>`;
  projectList.insertAdjacentHTML("beforeend", markup);
};
