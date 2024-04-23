import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import appConfigSlice from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    appConfig: appConfigSlice
  },
});
export default appStore;