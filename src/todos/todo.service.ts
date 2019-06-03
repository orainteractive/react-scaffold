import { ITodo, TodoState } from "./todo";
import * as todos from "./todo.actions";

export const addTodo = (todo: ITodo) => todos.addTodo(todo);
export const archiveTodo = (todo: ITodo) => todos.archiveTodo(todo);
export const markTodoAsComplete = (todo: ITodo) =>
  todos.markTodoAsComplete(todo);
export const markTodoAsIncomplete = (todo: ITodo) =>
  todos.markTodoAsIncomplete(todo);
export const isTodoComplete = (todo: ITodo) =>
  todo.state === TodoState.Complete;
