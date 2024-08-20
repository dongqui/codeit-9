export async function getTodoList() {
  const response = await fetch("/todos");
  const data = await response.json();
  return data;
}

export async function createTodoList(title) {
  const response = await fetch("/todos", {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
  });
  const data = response.json();
  return data;
}

export async function deleteTodoList(id) {
  const response = await fetch(`/todos/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updateTodo(id, newTitle) {
  const response = await fetch(`/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title: newTitle,
    }),
  });
  return response.json();
}
