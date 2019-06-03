import * as helpers from "../../test-helpers";
import * as Todo from "../../todos/todo";
import * as actions from "../../todos/todo.actions";
import reducer from "../../todos/todo.reducer";

describe("todo.reducer", () => {
  test("it can add a todo", () => {
    const todo = helpers.generateTodo();
    const state: Todo.ITodos = {
      todos: []
    };
    const action = actions.addTodo(todo);
    const actual = reducer(state, action);
    expect(actual).toEqual({
      todos: [todo]
    });
  });

  test("it can add a todo a non-empty state", () => {
    const todo = helpers.generateTodo();
    const state: Todo.ITodos = {
      todos: helpers.generateTodos(10)
    };
    const action = actions.addTodo(todo);
    const actual = reducer(state, action);
    expect(actual.todos[0]).toEqual(todo);
  });
});
