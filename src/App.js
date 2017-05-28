import React, { Component } from 'react';

// Import css
import css from './App.css';

import ShowTile from './components/ShowTile/ShowTile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowTile />
      </div>
    );
  }
}

export default App;
