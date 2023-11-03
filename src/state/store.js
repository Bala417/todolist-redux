import { configureStore } from "@reduxjs/toolkit";
import reducer from "../state/reducer/reducer";

const store = configureStore({
  reducer: { reducer },
});

export default store;
