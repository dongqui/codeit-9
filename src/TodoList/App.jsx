import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function App() {
    const [items, setItems] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleSubmit = (item) => {
        setItems((prevItems) => [item, ...prevItems]);
    };

    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems([...nextItems]);
    };

    const handleUpdate = (product) => {
        const splitIdx = items.findIndex((item) => item.id === product.id);
        setItems((prevItems) => [
            ...prevItems.slice(0, splitIdx),
            product,
            ...prevItems(splitIdx + 1),
        ]);
        setEditId(null);
    };

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
