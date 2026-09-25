import { Link } from "react-router-dom";

function TeamCard({ team }) {
  return (
    <div className="team-card">
     
      <img
        src={
          team.logo ||
          "https://placehold.co/150x150?text=TEAM"
        }
        alt={team.name}
      />

      <div className="team-card-content">
        <h3>{team.name}</h3>

        <p>
          <strong>Short Name:</strong> {team.shortName}
        </p>

        <p>
          <strong>City:</strong> {team.city}
        </p>

        <p>
          <strong>Captain:</strong> {team.captain}
        </p>

        <p>
          <strong>Titles:</strong> {team.titles}
        </p>

        <Link
          to={`/teams/${team.id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TeamCard;