export const getTodoList = async () => {
  const response = await fetch("/todos");
  const body = response.json();
  return body;
};

export const createTodo = async (data) => {
  const response = await fetch("/todos", {
    method: "POST",
    body: JSON.stringify({ title: data }),
  });

  const body = await response.json();
  return body;
};

export const updateTodo = async (data) => {
  const response = await fetch(`/todos/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: data.title }),
  });

  const body = await response.json();
  return body;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`/todos/${id}`, {
    method: "DELETE",
  });

  const body = await response.json();
  return body;
};
