import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
// Import css
import css from './App.css';

import ShowTile from './components/ShowTile/ShowTile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ShowTile />
        </div>
      </Router>
    );
  }
}

export default App;
