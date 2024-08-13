export default function TodoItem({ item, handleDelete, onUpdate }) {
    const handleDeletClick = () => {
        handleDelete(item.id);
    };

    const handleIsEdit = () => {
        onUpdate(item.id);
    };

    return (
        <li>
            {item.title}
            <button type="button" onClick={handleDeletClick}>
                삭제
            </button>
            <button type="button" onClick={handleIsEdit}>
                수정
            </button>
        </li>
    );
}
