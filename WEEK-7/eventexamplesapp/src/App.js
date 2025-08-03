import React from 'react';
import Counter from './Counter';
import CurrencyConverter from './CurrencyConverter';
import SyntheticEventExample from './SyntheticEventExample';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Event Handling Examples</h1>
      <Counter />
      <SyntheticEventExample />
      <CurrencyConverter />
    </div>
  );
}

export default App;

