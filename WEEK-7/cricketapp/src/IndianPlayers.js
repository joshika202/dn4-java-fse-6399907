import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Dhoni", "Jadeja", "Pant", "Shami"];
  const evenTeam = ["Rohit", "KL Rahul", "Bumrah", "Gill", "Chahal", "Hardik"];

  // Destructuring
  const [captain, viceCaptain, ...restOddTeam] = oddTeam;
  const [lead, coLead, ...restEvenTeam] = evenTeam;

  // Merging arrays
  const T20players = ["Surya", "Arshdeep", "Ishan"];
  const RanjiTrophy = ["Pujara", "Rahane", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophy]; // ES6 spread

  return (
    <div>
      <h2>Odd Team (Destructured)</h2>
      <p>Captain: {captain}</p>
      <p>Vice Captain: {viceCaptain}</p>
      <p>Others: {restOddTeam.join(', ')}</p>

      <h2>Even Team (Destructured)</h2>
      <p>Lead: {lead}</p>
      <p>Co-Lead: {coLead}</p>
      <p>Others: {restEvenTeam.join(', ')}</p>

      <h2>Merged T20 + Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
