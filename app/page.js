'use client';
import { useState } from 'react';
import AddItem from '../components/AddItem';
import PantryItem from '../components/PantryItem';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id, newItem) => {
    setItems(items.map((item) => (item.id === id ? newItem : item)));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Pantry Tracker</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <AddItem addItem={addItem} />
      <ul className="mt-4">
        {filteredItems.map((item) => (
          <PantryItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
    </div>
  );
}



