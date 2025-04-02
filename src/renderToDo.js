export const renderToDoList = function (toDoText, container) {
  const markup = `<li>${toDoText}</li>`;
  container.insertAdjacentHTML("beforeend", markup);
};

export const renderLocalStorage = function (container) {
  const toDos = JSON.parse(localStorage.getItem("todo"));
  if (toDos !== null) {
    toDos.forEach((todo) => {
      const text = todo.text;
      const markup = `<li>${text}</li>`;
      container.insertAdjacentHTML("beforeend", markup);
    });
  }
};

export const renderToDOinProject = function (toDotext, target) {
  const projectList = document.querySelector(`#${target}`);
  const markup = `<li>${toDotext}</li>`;
  projectList.insertAdjacentHTML("beforeend", markup);
};
