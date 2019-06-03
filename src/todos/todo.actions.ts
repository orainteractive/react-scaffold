import { ITodo, TodoActionType } from "./todo";

export const addTodo = (todo: ITodo) => ({
  type: TodoActionType.ADD_TODO,
  payload: todo
});

export const archiveTodo = (todo: ITodo) => ({
  type: TodoActionType.ARCHIVE_TODO,
  payload: todo
});

export const markTodoAsComplete = (todo: ITodo) => ({
  type: TodoActionType.MARK_TODO_COMPLETE,
  payload: todo
});

export const markTodoAsIncomplete = (todo: ITodo) => ({
  type: TodoActionType.MARK_TODO_INCOMPLETE,
  payload: todo
});
