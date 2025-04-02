/**
 * The function `renderLocalStorage` iterates over a given object of to-dos, generates HTML markup for
 * each project with its corresponding to-dos, and appends it to a specified container.
 * @param toDos - The `toDos` parameter is an object that contains project names as keys, with each key
 * corresponding to an array of to-do items for that project.
 * @param container - The `container` parameter in the `renderLocalStorage` function is the element
 * where the rendered to-do list will be inserted. It is the HTML element that will contain the
 * projects and their respective to-do lists.
 */
export const renderLocalStorage = function (toDos, container) {
  const keys = Object.keys(toDos);
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    const entries = toDos[element];
    var list = "";
    entries.forEach((entry) => {
      if (list !== undefined) {
        list += `<li>${entry.text}</li>`;
      } else list = `<li>${entry.text}</li>`;
    });
    const markupStart = `<div class="project"><h3>${element}</h3><button class="new-to-do" data-project="${element}">New To Do</button><ul class="to-do-list">`;
    const markupEnd = `</ul>
      </div>`;
    const html = markupStart + list + markupEnd;
    container.insertAdjacentHTML("beforeend", html);
  }
};
