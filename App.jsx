import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Teams from "./pages/Teams.jsx";
import TeamDetails from "./pages/TeamDetails.jsx";
import Matches from "./pages/Matches.jsx";
import Tournament from "./pages/Tournament.jsx";
import PointsTable from "./pages/PointsTable.jsx";
import Schedule from "./pages/Schedule.jsx";
import Rules from "./pages/Rules.jsx";
import Players from "./pages/Players.jsx";
import Profile from "./pages/Profile.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function TournamentOverview() {
  return (
    <div className="info-content">
      <h2>Welcome to CricketHub</h2>

      <p>
        
      </p>

      <p>
        Explore participating teams, players, match schedules,
        points tables and tournament rules.
      </p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        
             <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/dashboard" element={<Dashboard />} />

  <Route path="/teams" element={<Teams />} />

  <Route path="/teams/:id" element={<TeamDetails />} />

  <Route path="/players" element={<Players />} />

  <Route path="/profile" element={<Profile />} />

  <Route path="/admin" element={<Admin />} />

  <Route path="/matches" element={<Matches />} />

  <Route path="/tournament" element={<Tournament />}>
    <Route index element={<TournamentOverview />} />

    <Route
      path="points-table"
      element={<PointsTable />}
    />

    <Route
      path="schedule"
      element={<Schedule />}
    />

    <Route
      path="rules"
      element={<Rules />}
    />
  </Route>

  <Route path="/contact" element={<Contact />} />
</Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;