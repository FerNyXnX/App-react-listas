import React from "react";

function FilteredList({ items, searchText }) {
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div id="list">
      {filteredItems.length > 0 ? (
        <ul className="item-list">
          {filteredItems.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results">No se encontraron resultados</p>
      )}
    </div>
  );
}

export default FilteredList;