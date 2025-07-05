import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const installationSlice = createSlice({
  name: "installations",
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.list.push(action.payload);
    },
    updateInstallation: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteInstallation: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addInstallation,
  updateInstallation,
  deleteInstallation,
} = installationSlice.actions;

export default installationSlice.reducer;
