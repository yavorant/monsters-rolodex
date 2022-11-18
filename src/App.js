import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Ivan',
        lastName: 'Drago',
      },
      company: 'Google',
      relation: 'hate',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I{' '}
            {this.state.relation} {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: { firstName: 'Ian', lastName: 'Petrenko' },
                    relation: 'like',
                  };
                },
                () => {
                  console.log(this.state); //callback runs only after state has been updated
                }
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
