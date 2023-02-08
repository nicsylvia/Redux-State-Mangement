import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: null
}

const Reduxstate = createSlice({
  name: "users",
  initialState,
  reducers: {
    LoginUser: (state, actions) =>{
        state.current = actions.payload
    }
  }
});

export const {LoginUser} = Reduxstate.actions

export default Reduxstate.reducer