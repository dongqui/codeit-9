import { useState } from "react";

let id = 0;

export default function TodoInput({ onSubmit, onCancel, editId }) {
    const [title, setTitle] = useState();
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleOnClick = () => {
        if (editId) {
            onSubmit({ id: editId, title: title });
        } else {
            onSubmit({ id: id++, title: title });
        }
    };

    const handelCancel = () => {
        onCancel(null);
    };

    return (
        <>
            <input value={title} onChange={handleChange} />
            <button onClick={handleOnClick}>입력</button>
            {onCancel && <button onClick={handelCancel}>취소</button>}
        </>
    );
}
