import React, { Component } from 'react';
import './App.css';
import Author from './components/Author';

class App extends Component {
  render() {
  let author = {
    name: 'John Doe',
    image:'https://s13.favim.com/610/160324/avatar-beautiful-eyes-girl-Favim.com-4115088.jpg',
    bio:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex'
  };
    return (
      <div className="App">
        <Author
          name={author.name}
          bio={author.bio}
          image={author.image}
        />
      </div>
    );
  }
}

export default App;
