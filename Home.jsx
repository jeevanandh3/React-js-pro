import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">

        

        <div className="hero-content">
          <span className="hero-badge">🏆 CRICKET TOURNAMENT 2026</span>

          <h1>
            Experience the
            <span> Game of Cricket</span>
          </h1>

          <p>
            Follow teams, players, matches and tournament statistics
            all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/teams" className="btn primary-btn">
              Explore Teams
            </Link>

            <Link to="/matches" className="btn secondary-btn">
              View Matches
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h2>10</h2>
          <p>Teams</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Players</p>
        </div>

        <div className="stat-card">
          <h2>45</h2>
          <p>Matches</p>
        </div>

        <div className="stat-card">
          <h2>1</h2>
          <p>Champion</p>
        </div>
      </section>

      <section className="about-section">
        <div>
          <span className="section-label">ABOUT TOURNAMENT</span>

          <h2>
            One platform for the entire cricket tournament
          </h2>

          <p>
            CricketHub provides tournament information, team details,
            player profiles, match schedules and tournament statistics.
          </p>

          <Link to="/tournament" className="btn primary-btn">
            Explore Tournament
          </Link>
        </div>

        <div className="feature-box">
          <div>🏏</div>
          <h3>Live Tournament Experience</h3>
          <p>
            Explore teams, players, matches and tournament information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;