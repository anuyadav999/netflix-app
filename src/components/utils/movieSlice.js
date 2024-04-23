import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: null,
  reducers: [
    {
      moviePlaying: (state, action) => {
        state.movies = action.payload;
      },
    },
  ],
});
export const { moviePlaying } = movieSlice.actions;
export default movieSlice.reducer;
