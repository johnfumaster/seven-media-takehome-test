import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ShowTile extends Component {
  render() {
    if (!!this.props.length) {
      return (
        <div className="show-tile">

        </div>
      )
    }
    return null;
  }
}
// ShowTile.propTypes = {
//
// }

export default ShowTile;