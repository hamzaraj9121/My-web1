import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./createSlice";
import { createProduct } from "./productSlice";
let mainreducer=combineReducers({
  userSlice:userSlice.reducer,
  createProduct:createProduct.reducer,

})


export let mainStore= configureStore({
    reducer:mainreducer,
})