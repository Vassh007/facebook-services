import postReducer from "../features/postSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
