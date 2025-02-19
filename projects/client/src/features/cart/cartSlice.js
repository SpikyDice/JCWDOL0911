import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  cart: [
    {
      idproduct: 1,
      idunit: 1,
      idcategory: "Medicine",
      idpromo: 0,
      name: "Paracetamol Tablet 50mg",
      price: 25000,
      description: "Untuk menurunkan deman, batuk berdahak yg disertai flu",
      stock: 20,
      product_image: "",
      quantity: 1,
    },
    {
      idproduct: 2,
      idunit: 2,
      idcategory: "Obat Demam",
      idpromo: 0,
      name: "Dumin Tablet 100mg",
      price: 15000,
      description: "Untuk menurunkan deman, batuk berdahak yg disertai flu",
      stock: 40,
      product_image: "",
      quantity: 1,
    },
    {
      idproduct: 3,
      idunit: 2,
      idcategory: "Obat Demam",
      idpromo: 0,
      name: "Dumin Tablet 100mg",
      price: 15000,
      description: "Untuk menurunkan deman, batuk berdahak yg disertai flu",
      stock: 40,
      product_image:
        "https://www.shutterstock.com/image-vector/3d-icon-pharmacy-on-transparent-600w-2148866261.jpg",
      quantity: 1,
    },
  ],
  relatedProduct: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      //Need to pass item detail but with additional quantity properties from product list
      console.log(action.payload);
      // state.cart.push();
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((val, index) => {
        return index !== action.payload;
      });
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    addProductQuantity: (state, action) => {
      state.cart[action.payload].quantity++;

      // state.cart.filter((val) => val.idproduct === 2)[0].quantity = 0;
    },
    decreaseProductQuantity: (state, action) => {
      if (state.cart[action.payload].quantity === 1) {
        state.cart = state.cart.filter(
          (val, index) => index !== action.payload
        );
      } else {
        state.cart[action.payload].quantity--;
      }
    },
  },
});

export const getRelatedProduct = (cartProduct) => {
  return async (dispatch) => {
    const response = await Axios.post(
      `http://localhost:8000/product/relatedproduct`,
      cartProduct
    );
  };
};

export const {
  addProduct,
  removeProduct,
  setTotalPrice,
  addProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
