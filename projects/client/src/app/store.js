import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/users/userSlice";
import adminReduces from "../features/admin/adminSlice";
import questionReducer from "../features/qna/questionSlice";
import rajaongkirReducer from "../features/rajaongkir/rajaongkirSlice";
import addressReducer from "../features/users/addressSlice";
import answerReducer from "../features/admin/answerSlice";

//Global state

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    admin: adminReduces,
    questions: questionReducer,
    rajaongkir: rajaongkirReducer,
    address: addressReducer,
    answers: answerReducer,
  },
});
