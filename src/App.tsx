import React from 'react';

import logo from './assets/images/logo.svg';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={ logo } />

        <p>Edit <code>src/App.tsx</code> And Save To Reload.</p>

        <a className="App-link" href="https://reactjs.org" rel="noopener" target="_blank">Learn React</a>
      </header>
    </div>
  );
}

export default App;
