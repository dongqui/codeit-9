export const getTodoList = async () => {
  const response = await fetch("/todos");
  const body = response.json();
  return body;
};
