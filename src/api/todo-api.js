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

export const getTodoRequest = async (userId) => {
  const res = await fetch(
    `https://tishreen-62882-default-rtdb.firebaseio.com/todos/${userId}.json`
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    throw new Error(data.error.message || "Could not login!.");
  }

  return data;
};
