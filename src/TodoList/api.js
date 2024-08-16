async function getTodos() {
  const response = await fetch("/todos");
  const data = await response.data;
  return data;
}

export { getTodos };
