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
      const product = state.productsInCart.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        state.productsInCart = state.productsInCart.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      } else {
        state.productsInCart.push(action.payload);
      }
    },
    removeProductFromTheCart: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.productsInCart = state.productsInCart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProductToTheCart, removeProductFromTheCart } =
  cartSlice.actions;

export default cartSlice.reducer;
