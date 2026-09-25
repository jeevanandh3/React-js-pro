import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TeamCard from "../components/TeamCard.jsx";

function Teams() {
  const teams = useSelector((state) => state.teams.teams);

  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredTeams = teams.filter((team) => {
    const searchValue = search.toLowerCase();

    return (
      team.name.toLowerCase().includes(searchValue) ||
      team.shortName.toLowerCase().includes(searchValue) ||
      team.city.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Cricket Teams</h1>
          <p>Explore all participating teams.</p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search team..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {filteredTeams.length === 0 ? (
        <div className="empty-state">
          <h2>No Teams Found</h2>
          <p>Try searching with another team name or city.</p>
        </div>
      ) : (
        <div className="team-grid">
          {filteredTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Teams;