import React, { Component } from 'react';

class Friend extends Component {

  render() {
    return(
      <li className='friend'>
      <img className="profile-pic" src={ this.props.pictureUrl } />
        <h3>{ this.props.name }</h3>
        <div className="location">
            Location: { this.props.currentLocation.city }, { this.props.currentLocation.state }, { this.props.currentLocation.country }
        </div>
        <div className="status">
            Message: { this.props.status }
        </div>
        <div className="num-friends">
            Friends: { this.props.friendCount }
        </div>
      </li>
    )
  }
}

export default Friend;
