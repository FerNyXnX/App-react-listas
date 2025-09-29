import React from "react";

function Header() {
  return (
    <header className="app-header">
      <h1>🎬 Buscador de Películas</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#search">Buscar</a></li>
          <li><a href="#list">Lista</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;