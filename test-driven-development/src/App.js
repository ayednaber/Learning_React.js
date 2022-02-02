import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>This is a Counter App</h1>
      <div id='counter-value'>{counter}</div>
      <button id='increment-btn' onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
