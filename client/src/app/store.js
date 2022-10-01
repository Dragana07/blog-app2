import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./api/apiSlice";
// import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import apiUserReducer from "../features/apiUsers/apiUsersSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUser = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    apiUser: apiUserReducer,
    user: persistedUser,
    middleware: [thunk]
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: true,
});

export const persistor = persistStore(store)
