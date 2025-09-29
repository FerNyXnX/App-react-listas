import React, { useState } from "react";
import Header from "./components/header/Header";
import SearchBox from "./components/main/SearchBox";
import FilteredList from "./components/main/FilteredList";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [items] = useState([
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Memento",
    "Dunkirk",
    "Tenet",
    "Oppenheimer",
  ]);

  const [searchText, setSearchText] = useState("");

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <section className="search-section">
          <SearchBox onSearchChange={setSearchText} />
        </section>

        <section className="list-section">
          <FilteredList items={items} searchText={searchText} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;