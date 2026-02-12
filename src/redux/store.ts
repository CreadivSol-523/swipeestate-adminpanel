import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import Auth from "./Auth/AuthSlice";
import Plan from "./Plan/Plan";

export const store = configureStore({
   reducer: {
      [Auth.reducerPath]: Auth.reducer,
      [Plan.reducerPath]: Plan.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Auth.middleware, Plan.middleware),
});

setupListeners(store.dispatch);
