import React from "react";

function Footer() {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} Buscador de Películas. Creado con React ⚛️</p>
    </footer>
  );
}

export default Footer;