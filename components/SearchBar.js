// components/SearchBar.js
export default function SearchBar({ setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={(e) => setSearchQuery(e.target.value)}
      className="border p-2 w-full mt-4"
    />
  );
}
