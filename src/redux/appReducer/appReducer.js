import { createSlice } from "@reduxjs/toolkit";

const trendigo = createSlice({
  name: "productCartManagement",
  initialState: {
    userData: {},
    products: [],
    cartItems: [],
    wishListItems: [],
    selectedproduct: {},
    selectedCategory: null,
    userAddAddres: {},
  },

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSelectedProducts: (state, action) => {
      state.selectedproduct = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCartItems: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.cartItems = [];
        state.cartItems = action.payload;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    setWishListItems: (state, action) => {
      state.wishListItems = action.payload;
    },
    setAddUserAddress: (state, action) => {
      state.userAddAddres = action.payload;
    },
  },
});

export const {
  setUserData,
  setProducts,
  setSelectedProducts,
  setSelectedCategory,
  setCartItems,
  setWishListItems,
  setAddUserAddress,
} = flipKartClone.actions;

export default flipKartClone.reducer;
