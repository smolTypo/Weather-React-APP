import React from "react";

export default function SearchForm({ onSubmit, onChange, searchValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="search"
      className="flex items-center mb-3"
    >
      <input
        type="search"
        name="searchValue"
        placeholder="Search a city"
        className="flex-grow px-4 py-2 mr-2 border-2 border-slate-100 rounded-lg focus:outline-none text-black"
        onChange={onChange}
        value={searchValue}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:text-underline"
      >
        Search
      </button>
    </form>
  );
}
