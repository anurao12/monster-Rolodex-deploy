import React, { Component } from "react";
import { CardList } from "./components/Card-list/Card-list.components";
import { SearchBox } from "./components/SearchBox/SearchBoxComponent";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange=(e) =>{
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search Monster"
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
