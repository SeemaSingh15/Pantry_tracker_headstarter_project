import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddItem({ addItem }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = {
      id: uuidv4(),
      name,
    };

    addItem(newItem);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        placeholder="Add new item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white mt-2 p-2 rounded w-full"
      >
        Add Item
      </button>
    </form>
  );
}

