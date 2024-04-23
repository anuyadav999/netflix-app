import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "app config",
  initialState: {
    langPreference: "en",
  },
  reducers: {
    changeLanguagePreference: (state, action) => {
      state.langPreference = action.payload;
    },
  },
});
export const { changeLanguagePreference } = appConfigSlice.actions;
export default appConfigSlice.reducer;
