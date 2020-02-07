import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import Calculate from '../logic/calculate';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
