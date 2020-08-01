import React, { Component } from 'react';

// Import Components
import Header from './components/Header';
import NewsList from './components/NewsList';

// Import Global Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Hacker News</Header>

        <NewsList />
      </div>
    );
  }
}

export default App;
