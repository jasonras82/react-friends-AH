import React, { Component } from 'react';
import FriendsList from './components/FriendsList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        <div className="friends">
          <FriendsList/>
        </div>
      </div>
    );
  }
}

export default App;
