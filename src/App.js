import React from 'react';
import ComputerClock from './components/Clock/ComputerClock';
import WorldClock from './components/Clock/WorldClock';

function App(props) {
  return (<div>
    <h1>Clock: Exemplo de acesso a API externa</h1>
    <ComputerClock />
    <WorldClock />
  </div>);
}

export default App;
