import { createSlice } from "@reduxjs/toolkit";
import teamsData from "../data/teams.js";

const initialState = {
  teams: teamsData,
};

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams.push({
        ...action.payload,
        id: Date.now(),
        logo:
          action.payload.logo ||
          "https://placehold.co/150x150?text=TEAM",
      });
    },

    updateTeam: (state, action) => {
      const index = state.teams.findIndex(
        (team) => team.id === action.payload.id
      );

      if (index !== -1) {
        state.teams[index] = {
          ...state.teams[index],
          ...action.payload,
          logo:
            action.payload.logo ||
            state.teams[index].logo ||
            "https://placehold.co/150x150?text=TEAM",
        };
      }
    },

    deleteTeam: (state, action) => {
      state.teams = state.teams.filter(
        (team) => team.id !== action.payload
      );
    },
  },
});

export const {
  addTeam,
  updateTeam,
  deleteTeam,
} = teamSlice.actions;

export default teamSlice.reducer;