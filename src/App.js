import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './assets/scss/index.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
