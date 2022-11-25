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

  return data;
}
