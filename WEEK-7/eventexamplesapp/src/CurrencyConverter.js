import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2); // Assume 1 Euro = ₹90
    setEuros(converted);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Currency Converter (INR ➜ EUR)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in ₹"
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>€ {euros}</p>}
    </div>
  );
}

export default CurrencyConverter;
