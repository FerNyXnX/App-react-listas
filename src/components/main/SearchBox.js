import React from "react";

function SearchBox({ onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <form id="search" className="search-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search-input" className="visually-hidden">
        Buscar elemento
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Escribe para filtrar..."
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBox;