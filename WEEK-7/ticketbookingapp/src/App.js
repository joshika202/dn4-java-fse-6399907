import React, { useState } from 'react';
import './App.css';

function GuestPage() {
  return (
    <div className="card guest">
      <h2>👋 Welcome, Guest!</h2>
      <p>You can browse available flights below:</p>
      <ul>
        <li>✈️ Delhi ➜ Mumbai</li>
        <li>✈️ Bangalore ➜ Chennai</li>
        <li>✈️ Hyderabad ➜ Kolkata</li>
      </ul>
      <p className="info">🔒 Please login to book your tickets.</p>
    </div>
  );
}

function UserPage() {
  return (
    <div className="card user">
      <h2>✅ Welcome Back!</h2>
      <p>You can now book your tickets:</p>
      <ul>
        <li>🟢 Book Flight: Delhi ➜ Mumbai</li>
        <li>🟢 Book Flight: Bangalore ➜ Chennai</li>
        <li>🟢 Book Flight: Hyderabad ➜ Kolkata</li>
      </ul>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  // JSX Element variable
  const page = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div className="App">
      <header>
        <h1>✈️ Ticket Booking Portal</h1>
        <button onClick={toggleLogin} className={isLoggedIn ? 'logout' : 'login'}>
          {isLoggedIn ? '🚪 Logout' : '🔐 Login'}
        </button>
      </header>

      {page}
    </div>
  );
}

export default App;
