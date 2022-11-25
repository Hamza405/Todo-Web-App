export const addTodoAction = (state, action) => {
  state.todoList.push(action.payload);
  const todoList = window.localStorage.getItem("todoList");
  if (todoList) {
    const todoListArr = JSON.parse(todoList);
    todoListArr.push({
      ...action.payload,
    });
    window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
  } else {
    window.localStorage.setItem(
      "todoList",
      JSON.stringify([
        {
          ...action.payload,
        },
      ])
    );
  }
};
export const deleteTodoAction = (state, action) => {
  const todoList = window.localStorage.getItem("todoList");
  if (todoList) {
    const todoListArr = JSON.parse(todoList);
    todoListArr.forEach((todo, index) => {
      if (todo.id === action.payload) {
        todoListArr.splice(index, 1);
      }
    });
    window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
    state.todoList = todoListArr;
  }
};
export const updateTodoAction = (state, action) => {
  const todoList = window.localStorage.getItem("todoList");
  if (todoList) {
    const todoListArr = JSON.parse(todoList);
    todoListArr.forEach((todo) => {
      if (todo.id === action.payload.id) {
        todo.status = action.payload.status;
        todo.title = action.payload.title;
      }
    });
    window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
    state.todoList = [...todoListArr];
  }
};
export const updateFilterStatusAction = (state, action) => {
  state.filterStatus = action.payload;
};
