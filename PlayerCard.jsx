function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-avatar">
        {player.name.charAt(0)}
      </div>

      <div className="player-content">
        <h3>{player.name}</h3>

        <p>
          <strong>Username:</strong> {player.username}
        </p>

        <p>
          <strong>Email:</strong> {player.email}
        </p>

        <p>
          <strong>Phone:</strong> {player.phone}
        </p>

        <p>
          <strong>Website:</strong> {player.website}
        </p>

        <p>
          <strong>City:</strong> {player.city}
        </p>

        <span className="player-company">
          {player.company?.name}
        </span>
      </div>
    </div>
  );
}

export default PlayerCard;