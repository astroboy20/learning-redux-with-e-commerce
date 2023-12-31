import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn :false,
    email:null,
    userName:null,
    userID: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state,action)=>{
        const {email,userName, userID} = action.payload
        console.log(action.payload)
        state.isLoggedIn =true
        state.email = email
        state.userName = userName
        state.userId = userID
    },
    REMOVE_ACTIVE_USER:(state)=>{
        state.isLoggedIn =false
        state.email = null
        state.userName = null
        state.userId = null
    },
  }
});

export const {SET_ACTIVE_USER, REMOVE_ACTIVE_USER} = authSlice.actions
export const selectIsloggedIn = (state)=> state.auth.isLoggedIn
export const selectEmail = (state)=> state.auth.email
export const selectuserName = (state)=> state.auth.userName
export const selectuserID= (state)=> state.auth.userID

export default authSlice.reducer