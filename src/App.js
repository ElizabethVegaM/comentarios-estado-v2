import React, { Component } from 'react';
import './App.css';
import Navbar from './common/Navbar';
import WallComments from './WallComments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <WallComments />
      </div>
    );
  }
}

export default App;
