/**
 * The `createToDo` function prompts the user to enter a ToDo text and returns the input.
 * @returns The `createToDo` function is returning the text entered by the user in the prompt dialog
 * when they are asked to enter a ToDo text.
 */
export const createToDo = function () {
  const toDoText = prompt("Enter ToDo text:");
  return toDoText;
};
