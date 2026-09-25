
import PlayerCard from "../components/PlayerCard.jsx";

function Players() {
  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      username: "virat",
      email: "virat@example.com",
      phone: "9876543210",
      website: "viratkohli.com",
      city: "Delhi",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      username: "rohit",
      email: "rohit@example.com",
      phone: "9876543211",
      website: "rohitsharma.com",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Jasprit Bumrah",
      username: "bumrah",
      email: "bumrah@example.com",
      phone: "9876543212",
      website: "bumrah.com",
      city: "Ahmedabad",
    },
    {
      id: 4,
      name: "Hardik Pandya",
      username: "hardik",
      email: "hardik@example.com",
      phone: "9876543213",
      website: "hardikpandya.com",
      city: "Baroda",
    },
    {
      id: 5,
      name: "KL Rahul",
      username: "klrahul",
      email: "rahul@example.com",
      phone: "9876543214",
      website: "klrahul.com",
      city: "Bangalore",
    },
    {
      id: 6,
      name: "Ravindra Jadeja",
      username: "jadeja",
      email: "jadeja@example.com",
      phone: "9876543215",
      website: "jadeja.com",
      city: "Rajkot",
    },
    {
      id: 7,
      name: "Rishabh Pant",
      username: "rishabh",
      email: "pant@example.com",
      phone: "9876543216",
      website: "rishabhpant.com",
      city: "Roorkee",
    },
    {
      id: 8,
      name: "Shubman Gill",
      username: "shubman",
      email: "gill@example.com",
      phone: "9876543217",
      website: "shubmangill.com",
      city: "Punjab",
    },
    {
      id: 9,
      name: "Suryakumar Yadav",
      username: "surya",
      email: "surya@example.com",
      phone: "9876543218",
      website: "suryakumar.com",
      city: "Mumbai",
    },
    {
      id: 10,
      name: "Mohammed Siraj",
      username: "siraj",
      email: "siraj@example.com",
      phone: "9876543219",
      website: "siraj.com",
      city: "Hyderabad",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-label">PLAYERS</span>

        <h1>Tournament Players</h1>

        <p>
          Explore Key players participating in the tournament.
        </p>
      </div>

      {players.length > 0 ? (
        <div className="player-grid">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No players available</h3>
        </div>
      )}
    </div>
  );
}

export default Players;

