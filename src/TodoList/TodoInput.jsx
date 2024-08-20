import { useState } from "react";

export default function TodoInput({ onSubmit, onCancel, editId }) {
    const [title, setTitle] = useState();
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleOnClick = () => {
        if (editId) {
            onSubmit(editId, title);
        } else {
            onSubmit({ title: title });
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
