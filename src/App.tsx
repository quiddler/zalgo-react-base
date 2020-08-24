import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ExampleCard from './components/example-card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to Zalgo</h2>
      <ExampleCard></ExampleCard>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          style={{marginBottom:'20px'}}
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
