export async function getTodos() {
  const response = await fetch("/todos");

  if (!response.ok) {
    throw new Error("Failed to get todos");
  }

  const data = await response.json();
  return data;
}

export async function postTodos(title) {
  const response = await fetch("/todos", {
    method: "POST",
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Failed to post todo");
  }

  const data = await response.json();
  return data;
}

export async function updateTodos(id, title) {
  const response = await fetch(`todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  const data = await response.json();
  return data;
}
