export const getTodoList = async () => {
  const response = await fetch("/todos");
  const body = response.json();
  return body;
};

export const createTodo = async (data) => {
  const response = await fetch("/todos", {
    method: "POST",
    body: data,
  });

  const body = await response.json();
  return body;
};
