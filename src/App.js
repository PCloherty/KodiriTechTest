import React from 'react';
import './App.css';
import Gasbill from './gas.js';
import Hooks from './Hooks.js'

function App() {
  

  return (
    <div className="App">
      <div className="split">
        <div className="left">
          <Gasbill/>
          </div>
        <div className="right">
          <Hooks/>
          </div>
      </div>
    </div>
  );
}

export default App;
