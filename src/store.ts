import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import shopReducer from "./features/shop/shopSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
