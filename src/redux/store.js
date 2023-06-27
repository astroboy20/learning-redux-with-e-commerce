import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

export const rootReducer = combineReducers({
    auth:authReducer
})
export const store = configureStore({
    reducer:rootReducer
})