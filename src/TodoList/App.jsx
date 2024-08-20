import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleSubmit = async (item) => {
        const response = await fetch(`/todos`, {
            method: "POST",
            body: JSON.stringify(item),
        });
        if (!response.ok) {
            throw new Error("데이터를 생성하는데 실패했습니다");
        }
        const newItem = await response.json();
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems([...nextItems]);
    };

    const handleUpdate = async (id, title) => {
        const splitIdx = items.findIndex((item) => item.id === id);
        const response = await fetch(`/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ title }),
        });
        if (!response.ok) {
            throw new Error("데이터를 생성하는데 실패했습니다");
        }
        const newItem = await response.json();
        console.log(newItem);
        setItems((prevItems) => [
            ...prevItems.slice(0, splitIdx),
            newItem,
            ...prevItems.slice(splitIdx + 1),
        ]);
        setEditId(null);
    };

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/todos`);
            const body = await response.json();
            setItems(body);
        };
        getData();
    }, []);

    return (
        <div>
            <TodoInput onSubmit={handleSubmit} />
            <ul>
                {items.map((item) => {
                    if (item.id === editId) {
                        return (
                            <TodoInput
                                key={item.id}
                                editId={editId}
                                onSubmit={handleUpdate}
                                onCancel={setEditId}
                            />
                        );
                    } else {
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                handleDelete={handleDelete}
                                onUpdate={setEditId}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
