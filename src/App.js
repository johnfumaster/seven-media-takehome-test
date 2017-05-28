import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import Immutable from 'immutable';

// Import css
import css from './App.css';

import ShowTile from './components/ShowTile/ShowTile';

class App extends Component {
  // set default state
  state = {
    data: {
      'image_url': '',
      'image_alt': '',
      'show_name': '',
      'link_url': '#'
    }
  };

  /**
   * This function gets the data for and sets it in the state
   *
   * It tries to get the data from sessionStorage first; if it cannot be found
   * It will then fetch the data using Axios and store the data in sessionStorage.
   */
  getData() {
    if (!!window.sessionStorage) {
      let content = sessionStorage.getItem('tile');

      if (!content) {
        axios.get('data/tile.json')
          .then(res => {
            this.data = res.data;
            sessionStorage.setItem('tile', JSON.stringify(this.data));
            this.setState({ data: this.data });
          })
          .catch(function(error) {
            // error catching
            console.log(error);
            this.setState({ data: this.data });
          }.bind(this))
      }
      else {
        try {
          this.data = JSON.parse(content);
        }
        catch(error) {
          console.log(error);
        }
        finally {
          this.setState({ data: this.data });
        }
      }
    }
  }

  componentDidMount() {
    this.getData();
  }

  // it should only update when there is new data
  shouldComponentUpdate(nextProps, nextState) {
    const prevData = Immutable.fromJS(this.state.data);
    const nextData = Immutable.fromJS(nextState.data);
    return !Immutable.is(prevData, nextData);
  }

  render() {
    let data = this.state.data;
    let imageSource = data['image_url'];
    let imageAlt = data['image_alt'];
    let showName = data['show_name'];
    let linkUrl = data['link_url'];
    const logoAltText = 'Channel 7';
    const logoSrc = 'images/logo.png';

    return (
      <Router>
        <div className="App">
          <ShowTile logoSource={ logoSrc } logoAltText={logoAltText} showName={showName} displayLogo={true} imageAltText={imageAlt} imageSource={imageSource} linkUrl={linkUrl} isLinkExternal={true} />
        </div>
      </Router>
    );
  }
}

export default App;
