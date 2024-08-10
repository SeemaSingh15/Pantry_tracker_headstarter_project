import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function PantryItem({ item, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);

  const handleEdit = () => {
    if (isEditing) {
      editItem(item.id, { ...item, name });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center mt-2">
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      ) : (
        <span>{item.name}</span>
      )}
      <div className="flex space-x-2">
        <button onClick={handleEdit} className="text-yellow-500">
          <FaEdit />
        </button>
        <button onClick={() => deleteItem(item.id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

