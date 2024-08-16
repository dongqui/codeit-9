export async function getTodo() {
  const response = await fetch("/todos");
  const body = await response.json();
  return body;
}
