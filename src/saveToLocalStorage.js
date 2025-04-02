/**
 * The function `saveToDotoLocalStorage` saves a to-do item with its text and date to a specified
 * target in an array.
 * @param target - The `target` parameter in the `saveToDotoLocalStorage` function is used to specify
 * the key under which the `toDo` object will be stored in the `toDoArray`. It helps organize the to-do
 * items based on a specific category or target.
 * @param toDoText - The `toDoText` parameter in the `saveToDotoLocalStorage` function is the text
 * content of the to-do item that you want to save.
 * @param toDoArray - `toDoArray` is an array that contains objects representing to-do items. Each
 * object has a `date` property with the formatted date string in "yyyy-MM-dd" format and a `text`
 * property with the to-do text. The `saveToDotoLocalStorage` function takes `target
 */
import { format } from "date-fns";

export const saveToDotoLocalStorage = function (target, toDoText, toDoArray) {
  var date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");
  const toDo = new Object();
  toDo.date = formattedDate;
  toDo.text = toDoText;
  console.log(target, toDo);
  if (typeof toDoArray[target] === "undefined") {
    toDoArray[target] = new Array();
  }
  toDoArray[target].push(toDo);
  console.log(toDoArray);
  //   localStorage.setItem(`todo.${target}`, JSON.stringify(toDoArray));
  //   console.log(JSON.stringify(localStorage));
};
