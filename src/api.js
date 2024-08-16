export async function getTodoList() {
  const respons = await fetch("/todos");
  const data = await respons.json();
  return data;
}
