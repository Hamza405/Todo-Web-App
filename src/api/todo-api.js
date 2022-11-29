export async function addTodoRequest(userId, todo) {
  const res = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}.json`,
    {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  const secondRes = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}/${data.name}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        id: data.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const secondData = await secondRes.json();

  if (!secondRes.ok) {
    console.log(secondData);
    throw new Error(secondData.error.message || "Could not login!.");
  }

  return secondData;
}

export async function getTodoRequest(userId) {
  const res = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}.json`
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return Object.values(data);
}

export const updateTodoRequest = async (userId, todo) => {
  const res = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}/${todo.id}.json`,
    {
      method: "PATCH",
      body: JSON.stringify({
        status: todo.status,
        title: todo.title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data;
};

export const deleteTodoRequest = async (userId, todoId) => {
  const res = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}/${todoId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data;
};
