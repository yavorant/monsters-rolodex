import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users') //promise
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase(); // FFfffFF => fffffff

            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
