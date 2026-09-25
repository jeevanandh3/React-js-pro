import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const teams = useSelector((state) => state.teams.teams);

  const totalTeams = teams.length;

  const totalTitles = teams.reduce(
    (total, team) => total + Number(team.titles || 0),
    0
  );

  const cities = new Set(
    teams.map((team) => team.city)
  ).size;

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Cricket Tournament Manager overview
          </p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="dashboard-icon">🏏</div>

          <h3>Total Teams</h3>

          <h2>{totalTeams}</h2>

          <Link to="/teams">
            View Teams →
          </Link>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">🏆</div>

          <h3>Total Titles</h3>

          <h2>{totalTitles}</h2>

          <Link to="/tournament/points-table">
            Points Table →
          </Link>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">📍</div>

          <h3>Cities</h3>

          <h2>{cities}</h2>

          <Link to="/teams">
            Explore Teams →
          </Link>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon">⚡</div>

          <h3>Tournament</h3>

          <h2>Live</h2>

          <Link to="/tournament">
            Tournament →
          </Link>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <Link
            to="/admin"
            className="quick-action"
          >
            <span>➕</span>
            <div>
              <h3>Add Team</h3>
              <p>Create a new tournament team.</p>
            </div>
          </Link>

          <Link
            to="/players"
            className="quick-action"
          >
            <span>👤</span>
            <div>
              <h3>Players</h3>
              <p>View player information.</p>
            </div>
          </Link>

          <Link
            to="/matches"
            className="quick-action"
          >
            <span>🏏</span>
            <div>
              <h3>Matches</h3>
              <p>Check upcoming matches.</p>
            </div>
          </Link>

          <Link
            to="/tournament/rules"
            className="quick-action"
          >
            <span>📋</span>
            <div>
              <h3>Rules</h3>
              <p>View tournament rules.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;