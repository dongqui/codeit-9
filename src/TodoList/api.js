export async function getTodo() {
  const response = await fetch("/todos");
  const body = await response.json();
  return body;
}

export async function postTodo() {
  const res = await fetch("/todos", {
    method: "POST",
    body: JSON.stringify(),
  });
  const data = await res.json();
  return data;
}
