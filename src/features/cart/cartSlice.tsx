import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  productsInCart: ProductInCart[];
};

const initialState: CartState = {
  productsInCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProductToTheCart: (state, action: PayloadAction<ProductInCart>) => {
      state.productsInCart.push(action.payload);
    },
  },
});

export const { addProductToTheCart } = cartSlice.actions;

export default cartSlice.reducer;
