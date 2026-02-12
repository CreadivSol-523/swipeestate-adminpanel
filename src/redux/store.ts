import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import Auth from "./Auth/AuthSlice";
import Plan from "./Plan/Plan";
import Profile from "./Profile/Profile";

export const store = configureStore({
   reducer: {
      [Auth.reducerPath]: Auth.reducer,
      [Plan.reducerPath]: Plan.reducer,
      [Profile.reducerPath]: Profile.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Auth.middleware, Plan.middleware, Profile.middleware),
});

setupListeners(store.dispatch);
