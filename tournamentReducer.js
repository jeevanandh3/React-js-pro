const initialState = {
  notifications: [],
  tournamentStatus: "Upcoming",
  selectedTeam: null,
};

function tournamentReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [
          ...state.notifications,
          action.payload,
        ],
      };

    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (_, index) => index !== action.payload
        ),
      };

    case "SET_STATUS":
      return {
        ...state,
        tournamentStatus: action.payload,
      };

    case "SELECT_TEAM":
      return {
        ...state,
        selectedTeam: action.payload,
      };

    default:
      return state;
  }
}

export { initialState };

export default tournamentReducer;