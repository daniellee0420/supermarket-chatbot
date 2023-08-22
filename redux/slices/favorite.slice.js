import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    clearFav: () => {
      return initialState;
    },
    addFavItem: (state, action) => {
      let { products } = state;
      if (products.findIndex((x) => (x.id === action.payload.id)) > -1) {
        return
      } else {
        products.push(action.payload);
      }
      state.products = products;
    },
    removeFavItem: (state, action) => {
      let { products } = state;
      if (products.findIndex((x) => (x.id === action.payload.id)) > -1) {
        products = products.filter((x) => x.id !== action.payload.id);
      }
      state.products = products;
    },
  },
});

export const { addFavItem, removeFavItem, clearCart } = favoriteSlice.actions;
export default favoriteSlice.reducer;
