export interface ITodos {
  todos: ITodo[];
}

export enum TodoState {
  Incomplete,
  Complete,
  Archived
}

export interface ITodo {
  id: string;
  title: string;
  state: TodoState;
}

export enum TodoActionType {
  ADD_TODO = "@todos/ADD_TODO",
  MARK_TODO_COMPLETE = "@todos/MARK_TODO_COMPLETE",
  MARK_TODO_INCOMPLETE = "@todos/MARK_TODO_INCOMPLETE",
  ARCHIVE_TODO = "@todos/ARCHIVE_TODO"
}

export interface ITodoAction {
  type: TodoActionType;
  payload: any;
}

export const addTodoToList = (todos: ITodo[], todo: ITodo) => [todo, ...todos];

export const markTodoComplete = (todo: ITodo) => ({
  ...todo,
  state: TodoState.Complete
});

export const markTodoCompleteInList = (todos: ITodo[], todo: ITodo) =>
  todos.map(t => (t.id === todo.id ? markTodoComplete(todo) : todo));

export const markTodoIncomplete = (todo: ITodo) => ({
  ...todo,
  state: TodoState.Incomplete
});

export const markTodoIncompleteInList = (todos: ITodo[], todo: ITodo) =>
  todos.map(t => (t.id === todo.id ? markTodoIncomplete(todo) : todo));

export const archiveTodo = (todo: ITodo) => ({
  ...todo,
  state: TodoState.Archived
});

export const archiveTodoInList = (todos: ITodo[], todo: ITodo) =>
  todos.map(t => (t.id === todo.id ? archiveTodo(todo) : todo));
