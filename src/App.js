import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list-component'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // replace this stupid line of code
    // with arrow funtion in the handelChange method
    this.handelChange = this.handelChange.bind(this);
  }

  // when react render our component into the DOM
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))

  }

  handelChange = (e) =>   {
    this.setState({searchField: e.target.value})
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsteres = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <input
          type='Search'
          placeholder='search monsters'
          onChange={this.handelChange}
          />
        <CardList monsters={filteredMonsteres}>

        </CardList>
      </div>
    );
  }

}

export default App;

