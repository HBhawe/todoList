import { format } from "date-fns";

export const saveToDotoLocalStorage = function (toDoText, toDoArray) {
  var date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");
  const toDo = new Object();
  toDo.date = formattedDate;
  toDo.text = toDoText;
  toDoArray.push(toDo);
  localStorage.setItem("todo", JSON.stringify(toDoArray));
};
