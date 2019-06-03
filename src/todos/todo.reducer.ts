import {
  addTodoToList,
  archiveTodoInList,
  ITodoAction,
  ITodos,
  markTodoCompleteInList,
  markTodoIncompleteInList,
  TodoActionType
} from "./todo";

const initialState: ITodos = { todos: [] };

export default (state = initialState, action: ITodoAction) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        todos: addTodoToList(state.todos, action.payload)
      };
    case TodoActionType.MARK_TODO_COMPLETE:
      return {
        todos: markTodoCompleteInList(state.todos, action.payload)
      };
    case TodoActionType.MARK_TODO_INCOMPLETE:
      return {
        todos: markTodoIncompleteInList(state.todos, action.payload)
      };
    case TodoActionType.ARCHIVE_TODO:
      return {
        todos: archiveTodoInList(state.todos, action.payload)
      };
    default:
      return state;
  }
};
