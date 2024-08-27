import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ShopState = {
  totalProducts: number;
  showingProducts: number;
};

const initialState: ShopState = {
  totalProducts: 0,
  showingProducts: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTotalProducts: (state, action: PayloadAction<number>) => {
      state.totalProducts = action.payload;
    },
    setShowingProducts: (state, action: PayloadAction<number>) => {
      state.showingProducts = action.payload;
    },
  },
});

export const { setTotalProducts, setShowingProducts } = shopSlice.actions;

export default shopSlice.reducer;
