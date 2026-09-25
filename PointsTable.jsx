function PointsTable() {
  const teams = [
    ["Chennai Super Kings", 8, 6, 2, 12],
    ["Mumbai Indians", 8, 5, 3, 10],
    ["Royal Challengers Bengaluru", 8, 5, 3, 10],
    ["Kolkata Knight Riders", 8, 4, 4, 8],
    ["Rajasthan Royals", 8, 4, 4, 8],
  ];

  return (
    <div>
      <h2>Points Table</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team, index) => (
              <tr key={team[0]}>
                <td>{index + 1}</td>
                <td>{team[0]}</td>
                <td>{team[1]}</td>
                <td>{team[2]}</td>
                <td>{team[3]}</td>
                <td>{team[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PointsTable;