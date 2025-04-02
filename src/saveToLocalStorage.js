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
