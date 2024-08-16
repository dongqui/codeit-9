export async function getTodos({
	order = 'createdAt', 
	offset = 0, 
	limit = 5
}) {
	const query = `order=${order}&offset=${offset}&limit=${limit}`;
	const response = await fetch(GET /todos);
	const body = await response.json();
	return body;
}