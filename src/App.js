import React, { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search.box";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMosters, setFilterMonster] = useState(monsters);

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonster(newFilteredMonsters);
  }, [monsters, searchField]);

  const onChangeSearch = (event) => {
    const searchFieldstring = event.target.value.toLowerCase();
    setSearchField(searchFieldstring);
  };

  return (
    <div className=" App">
      <h1> Shopping</h1>
      <SearchBox
        shka={onChangeSearch}
        placeholder="Search Monsters"
        className="search-box"
      ></SearchBox>
      <CardList monsters={filteredMosters}></CardList>
    </div>
  );
};

export default App;
