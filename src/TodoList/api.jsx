export async function getTodo() {
  const res = await fetch("/todos");
  const body = await res.json();
  return body;
}

export async function postTodo(title) {
  const res = await fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const data = await res.json();
  return data;
}

export async function updateTodo(id, title) {
  const res = await fetch(`/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const data = await res.json();
  return data;
}

export async function deleteTodo(id) {
  const res = await fetch(`/todos/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}
