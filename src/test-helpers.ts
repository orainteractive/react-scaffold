import uuid from "uuid/v4";
import * as Todo from "./todos/todo";

export const generateTodo = (attrs?: any): Todo.ITodo => ({
  id: uuid(),
  title: "TEST TODO",
  state: Todo.TodoState.Incomplete,
  ...attrs
});

export const generateTodos = (amount = 10): Todo.ITodo[] =>
  Array.from(Array(amount)).map(generateTodo);
