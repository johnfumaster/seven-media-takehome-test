import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './showTile.css';

class ShowTile extends Component {
  renderLogo() {
    if (this.props.displayLogo) {
      return (
        <img src={this.props.logoSource} alt={this.props.logoAltText} className="show-tile--logo"/>
      )
    }
    return null;
  }
  renderTile() {
    return(
      <div>
        <img src={this.props.imageSource} alt={this.props.imageAltText} className="show-tile--image" />
        <div className="show-tile--label-wrapper">
          {this.renderLogo()}
          <span className="show-tile--label">{this.props.showName}</span>
        </div>
      </div>
    )
  }

  render() {
      if (this.props.isLinkExternal) {
        return (
          <div className="show-tile">
            <a href={this.props.linkUrl} aria-label="this link will open a new window" target="_blank" rel="noopener noreferrer">
              { this.renderTile() }
            </a>
          </div>
        )
      }

      return (
        <div className="show-tile">
          <Link to={this.props.linkUrl}>
            { this.renderTile() }
          </Link>
        </div>
      )
  }
}
ShowTile.propTypes = {
  logoSource: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
  displayLogo: PropTypes.bool.isRequired,
  linkUrl: PropTypes.string.isRequired,
  isLinkExternal: PropTypes.bool.isRequired
};

export default ShowTile;