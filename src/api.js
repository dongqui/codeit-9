export async function getTodoList() {
  const response = await fetch("/todos");
  const data = await response.json();
  return data;
}

export async function createTodoList(id, title) {
  const response = await fetch("/todos", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      title: title,
    }),
  });
  const data = response.json();
  return data;
}