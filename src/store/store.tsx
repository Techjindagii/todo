import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
