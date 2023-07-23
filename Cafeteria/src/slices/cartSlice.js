// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, actions) {
      const cartItem = state.cart.find(
        (item) => item.id === actions.payload.id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cart.push({ ...actions.payload, quantity: 1 });
      }
    },
    removeFromCart() {},
    incrementItem() {},
    decrementItem() {},
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
