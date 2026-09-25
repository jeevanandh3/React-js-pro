import { NavLink, Outlet } from "react-router-dom";

function Tournament() {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="section-label">TOURNAMENT</span>

        <h1>Cricket Tournament</h1>

        <p>
          Everything you need to know about the tournament.
        </p>
      </div>

      <div className="nested-nav">
        <NavLink to="/tournament">Overview</NavLink>

        <NavLink to="/tournament/points-table">
          Points Table
        </NavLink>

        <NavLink to="/tournament/schedule">
          Schedule
        </NavLink>

        <NavLink to="/tournament/rules">
          Rules
        </NavLink>
      </div>

      <div className="nested-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Tournament;