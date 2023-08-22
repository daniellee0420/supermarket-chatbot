import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice";
import favoriteReducer from "./slices/favorite.slice";
import { CookieStorage } from "redux-persist-cookie-storage";
import Cookies from "./cookies";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: new CookieStorage(Cookies /*, options */),
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = globalThis.window ? persistStore(store) : store;
