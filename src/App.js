import React, { Component } from 'react';

// Import Layout Components
import Header from './shared/Header';
import Main from './shared/Main';
import Footer from './shared/Footer';

import NewsList from './components/NewsList';

// Import AppStyles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header>Hacker News</Header>
        <Main className="container">
          <NewsList />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
