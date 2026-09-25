import { useReducer } from "react";

import tournamentReducer, {
  initialState,
} from "../reducer/tournamentReducer.js";

function TournamentStatus() {
  const [state, dispatch] = useReducer(
    tournamentReducer,
    initialState
  );

  const startTournament = () => {
    dispatch({
      type: "SET_STATUS",
      payload: "Live",
    });
  };

  const finishTournament = () => {
    dispatch({
      type: "SET_STATUS",
      payload: "Completed",
    });
  };

  const addNotification = () => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: "Tournament status updated!",
    });
  };

  return (
    <div className="status-panel">
      <h2>Tournament Status</h2>

      <div className="current-status">
        <span>Current Status</span>

        <strong>{state.tournamentStatus}</strong>
      </div>

      <div className="status-buttons">
        <button
          className="btn primary-btn"
          onClick={startTournament}
        >
          Start Tournament
        </button>

        <button
          className="btn secondary-btn"
          onClick={finishTournament}
        >
          Finish Tournament
        </button>

        <button
          className="btn secondary-btn"
          onClick={addNotification}
        >
          Add Notification
        </button>
      </div>

      {state.notifications.length > 0 && (
        <div className="notifications">
          <h3>Notifications</h3>

          {state.notifications.map((notification, index) => (
            <div
              className="notification"
              key={index}
            >
              <span>{notification}</span>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_NOTIFICATION",
                    payload: index,
                  })
                }
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TournamentStatus;