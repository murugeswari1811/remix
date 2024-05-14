import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    signupDetails:{
        firstName:"",
        email:"",
        password:""
    },
    loginDetails:{
        userName:"",
        password:""
    }
   
  },
  reducers: {
    setSignupDetails: (state, action) => {
        state.signupDetails= action.payload
      },
      setLoginDetails: (state, action) => {
        state.loginDetails= action.payload
      },
  },
})

export const { setSignupDetails,setLoginDetails } = counterSlice.actions

export default counterSlice.reducer