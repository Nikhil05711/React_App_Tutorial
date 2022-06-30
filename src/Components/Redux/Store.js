import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Create_Slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
