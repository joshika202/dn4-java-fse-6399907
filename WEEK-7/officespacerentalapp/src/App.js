import React from 'react';
import './App.css';

function App() {
  // Heading JSX Element
  const heading = <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Office Space Rental Listings</h1>;

  // Office image URL
  const officeImage = "https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg"; // You can replace with any image URL

  // Office object
  const office = {
    name: "Regus Workspace",
    rent: 75000,
    address: "3rd Floor, Tech Park, Bangalore"
  };

  // List of office spaces
  const officeList = [
    { name: "WeWork", rent: 55000, address: "Indiranagar, Bangalore" },
    { name: "Awfis", rent: 62000, address: "Koramangala, Bangalore" },
    { name: "Cowrks", rent: 45000, address: "Whitefield, Bangalore" },
    { name: "Smartworks", rent: 70000, address: "HSR Layout, Bangalore" },
  ];

  // JSX
  return (
    <div className="App">
      {heading}

      {/* Office Image */}
      <img src={officeImage} alt="Office Space" width="600" style={{ display: 'block', margin: 'auto' }} />

      {/* Single Office Detail */}
      <div style={{ margin: '20px' }}>
        <h2>{office.name}</h2>
        <p><strong>Address:</strong> {office.address}</p>
        <p style={{ color: office.rent > 60000 ? "green" : "red" }}>
          <strong>Rent:</strong> ₹{office.rent}
        </p>
      </div>

      {/* List of offices */}
      <h3 style={{ marginTop: '40px' }}>More Office Spaces:</h3>
      <div>
        {officeList.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
            <h4>{item.name}</h4>
            <p><strong>Address:</strong> {item.address}</p>
            <p style={{ color: item.rent > 60000 ? 'green' : 'red' }}>
              <strong>Rent:</strong> ₹{item.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
