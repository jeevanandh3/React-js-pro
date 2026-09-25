import { configureStore } from "@reduxjs/toolkit";

import teamReducer from "./teamSlice.js";

const store = configureStore({
  reducer: {
    teams: teamReducer,
  },
});

export default store;