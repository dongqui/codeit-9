/* eslint-disable no-plusplus */
import { http, HttpResponse } from "msw";

let data = [
  {
    id: 1,
    title: "React 공부하기",
  },
  {
    id: 2,
    title: "타입스트립트 공부하기",
  },
  {
    id: 3,
    title: "next.js 공부하기",
  },
  {
    id: 4,
    title: "javascript 공부하기",
  },
  {
    id: 5,
    title: "useEffect 공부하기",
  },
];

const getTodos = http.get("/todos", () =>
  HttpResponse.json(data, { status: 200 })
);

const deleteTodo = http.delete("/todos/:id", ({ params }) => {
  const index = data.findIndex((todo) => todo.id === Number(params.id));
  if (index < 0) {
    return HttpResponse.json({ error: "유효하지 않은 id" }, { status: 400 });
  }
  data.splice(index, 1);
  return HttpResponse.json({ id: Number(params.id) }, { status: 202 });
});

const putTodo = http.patch("/todos/:id", async ({ params, request }) => {
  const todo = data.find((d) => d.id === Number(params.id));
  const newTodo = await request.json();
  if (!todo || newTodo.title === undefined) {
    return HttpResponse.json({ error: "유효하지 않은 요청" }, { status: 400 });
  }
  todo.title = newTodo.title;
  return HttpResponse.json({ ...todo }, { status: 201 });
});

let id = 10;
const postTodo = http.post("/todos", async ({ request }) => {
  const newTodo = await request.json();
  if (newTodo.title === undefined) {
    return HttpResponse.json({ error: "유효하지 않은 요청" }, { status: 400 });
  }
  const todo = {
    id: id++,
    title: newTodo.title,
  };
  data.push(todo);
  return HttpResponse.json(todo, { status: 201 });
});

const handlers = [getTodos, putTodo, deleteTodo, postTodo];

export default handlers;

// GET method, /todos
// fetch('/todos')
// [{id, title}]
