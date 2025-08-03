import React from 'react';

function SyntheticEventExample() {
  const handleClick = (event) => {
    event.preventDefault(); // synthetic event in action
    alert("I was clicked");
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Synthetic Event Example</h2>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default SyntheticEventExample;
