import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices/dataSlice";
import { dataSelectSlice } from "./selectors/selectDataSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    dataSelectSlice,
  },
});
