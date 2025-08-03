import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Dhoni", score: 67 },
    { name: "KL Rahul", score: 59 },
    { name: "Jadeja", score: 74 },
    { name: "Bumrah", score: 50 },
    { name: "Gill", score: 80 },
    { name: "Pant", score: 78 },
    { name: "Hardik", score: 90 },
    { name: "Chahal", score: 30 },
    { name: "Shami", score: 40 },
  ];

  // Using map()
  const playerList = players.map((player, index) => (
    <li key={index}>{player.name} - Score: {player.score}</li>
  ));

  // Using arrow function to filter scores < 70
  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{playerList}</ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
