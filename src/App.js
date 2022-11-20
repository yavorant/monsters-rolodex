import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users') //promise
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // },
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); // FFfffFF => fffffff

    this.setState(() => {
      return { searchField }; // === return { searchField: filteredMonsters };
    });
  };

  render() {
    // console.log('render');

    //destructuring not to type this. every time:
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
