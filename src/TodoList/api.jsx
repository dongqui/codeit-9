export const getTodoList = async () => {
  const response = await fetch('/todos');
  const data = response.json();
  return data;
};
