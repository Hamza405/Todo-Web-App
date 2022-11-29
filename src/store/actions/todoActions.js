export const addTodoAction = (state, action) => {
  state.todoList.push(action.payload);
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
  if (state.todoList.length > 0) {
    const todoListArr = [...state.todoList];
    todoListArr.forEach((todo) => {
      if (todo.id === action.payload.id) {
        todo.status = action.payload.status;
        todo.title = action.payload.title;
      }
    });
    state.todoList = [...todoListArr];
  }
};
export const updateFilterStatusAction = (state, action) => {
  state.filterStatus = action.payload;
};

export const replaceTodoListAction = (state, action) => {
  state.todoList = action.payload;
};
