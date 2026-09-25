import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function TeamDetails() {
  const { id } = useParams();

  const teams = useSelector((state) => state.teams.teams);

  const team = teams.find(
    (item) => String(item.id) === String(id)
  );

  if (!team) {
    return (
      <div className="page-container">
        <div className="empty-state">
          <h2>Team Not Found</h2>

          <p>
            The requested team does not exist.
          </p>

          <Link to="/teams" className="btn btn-primary">
            Back to Teams
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="team-details">
        <div className="team-details-image">
          <img
            src={
              team.logo ||
              "https://placehold.co/250x250?text=TEAM"
            }
            alt={team.name}
          />
        </div>

        <div className="team-details-content">
          <h1>{team.name}</h1>

          <p>
            <strong>Short Name:</strong>{" "}
            {team.shortName}
          </p>

          <p>
            <strong>City:</strong> {team.city}
          </p>

          <p>
            <strong>Captain:</strong>{" "}
            {team.captain}
          </p>

          <p>
            <strong>Coach:</strong> {team.coach}
          </p>

          <p>
            <strong>Titles:</strong> {team.titles}
          </p>

          <Link
            to="/teams"
            className="btn btn-secondary"
          >
            ← Back to Teams
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;