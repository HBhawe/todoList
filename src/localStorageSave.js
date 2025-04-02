/**
 * The function `saveToDotoLocalStorage` saves a new to-do item with a specified text to a target array
 * in local storage along with the current date.
 * @param target - The `target` parameter in the `saveToDotoLocalStorage` function is used to specify
 * the index of the array in `toDoArray` where the new to-do item should be added.
 * @param toDoText - The `toDoText` parameter in the `saveToDotoLocalStorage` function is the text
 * content of the to-do item that you want to save to the local storage.
 * @param toDoArray - The `toDoArray` parameter in the `saveToDotoLocalStorage` function is an array
 * that contains objects representing to-do items. Each object in the array has properties like `date`
 * and `text` to store the date and text of the to-do item. The function adds a new
 */
import { format } from "date-fns";

export const saveToDotoLocalStorage = function (target, toDoText, toDoArray) {
  var date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");
  const toDo = new Object();
  toDo.date = formattedDate;
  toDo.text = toDoText;
  toDoArray[target].push(toDo);
  localStorage.setItem("ToDo", JSON.stringify(toDoArray));
};
