import React, { Component } from 'react';
import Gallery from './gallery';
import Menu from './menu';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery />
        <Menu />
      </div>
    );
  }
}

export default App;
