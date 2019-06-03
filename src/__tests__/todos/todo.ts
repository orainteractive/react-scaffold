import * as helpers from "../../test-helpers";
import * as Todo from "../../todos/todo";

describe("addTodoToList", () => {
  test("it adds a todo to an empty list", () => {
    const todos: Todo.ITodo[] = [];
    const todo = helpers.generateTodo();
    const actual = Todo.addTodoToList(todos, todo);

    expect(actual[0].id).toEqual(todo.id);
  });

  test("it adds a todo to a list with todos in it", () => {
    const todos: Todo.ITodo[] = Array.from(Array(10)).map(helpers.generateTodo);
    const todo = helpers.generateTodo();
    const actual = Todo.addTodoToList(todos, todo);

    expect(actual[0].id).toEqual(todo.id);
  });
});

describe("archiveTodo", () => {
  test("it archives a todo", () => {
    const todo = helpers.generateTodo();

    expect(Todo.archiveTodo(todo).state).toEqual(Todo.TodoState.Archived);
  });
});

describe("archiveTodoInList", () => {
  test("it marks an incomplete todo as archived in a list", () => {
    const todos = Array.from(Array(10)).map(helpers.generateTodo);
    expect(Todo.archiveTodoInList(todos, todos[5])[5].state).toEqual(
      Todo.TodoState.Archived
    );
  });
});

describe("markTodoComplete", () => {
  test("it marks an incomplete todo as complete", () => {
    const todo = helpers.generateTodo({ state: Todo.TodoState.Incomplete });

    expect(Todo.markTodoComplete(todo).state).toEqual(Todo.TodoState.Complete);
  });
});

describe("markTodoCompleteInList", () => {
  test("it marks an icomplete todo as complete in a list", () => {
    const todos = Array.from(Array(10)).map(helpers.generateTodo);
    todos[5].state = Todo.TodoState.Incomplete;

    expect(Todo.markTodoCompleteInList(todos, todos[5])[5].state).toEqual(
      Todo.TodoState.Complete
    );
  });
});

describe("markTodoIncomplete", () => {
  test("it marks a complete todo as incomplete", () => {
    const todo = helpers.generateTodo({ state: Todo.TodoState.Complete });

    expect(Todo.markTodoIncomplete(todo).state).toEqual(
      Todo.TodoState.Incomplete
    );
  });
});

describe("markTodoIncompleteInList", () => {
  test("it marks a complete todo as incomplete in a list", () => {
    const todos = Array.from(Array(10)).map(helpers.generateTodo);
    expect(Todo.markTodoIncompleteInList(todos, todos[5])[5].state).toEqual(
      Todo.TodoState.Incomplete
    );
  });
});
