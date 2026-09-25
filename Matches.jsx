import matches from "../data/matches.js";

function Matches() {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-label">MATCHES</span>

        <h1>Match Schedule</h1>

        <p>
          Check upcoming matches, venues and match timings.
        </p>
      </div>

      <div className="matches-list">
        {matches.map((match) => (
          <div className="match-card" key={match.id}>
            <div className="match-date">
              <strong>{match.date}</strong>
              <span>{match.time}</span>
            </div>

            <div className="match-teams">
              <h3>{match.team1}</h3>

              <span>VS</span>

              <h3>{match.team2}</h3>
            </div>

            <div className="match-info">
              <p>📍 {match.venue}</p>

              <span className="status">
                {match.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;