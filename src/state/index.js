import { createSlice } from "@reduxjs/toolkit"; // a new implementation of redux to make it simple

const initialState = {// set all intial state we need in this app
  mode: "light",
  user: null,
  token: null,
  products: [],
  menuon: false,
  userlogged: false,
  adminlogged: false,
  Ppagedetails: null,
  

};


export const authSlice = createSlice({

  name: "auth",
  initialState,

// This include all the logic that we need for the entire appliction
  reducers: { // functions that can set the new state (actions)
    setMenuon: (state) => {
      state.menuon = state.menuon ? false : true;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setuserlogged: (state) => {
       state.userlogged = true;
    },
    setuserloggedout: (state) => {
      state.userlogged = false;
   },
    setadminlogged: (state) => {
      state.adminlogged = true;
   },
   setProducts: (state, action) => {
    state.products = action.payload.products;
  },
  setPdetails: (state, action) => {
    state.Ppagedetails = action.payload.Ppagedetails;
  },

   
  },

});


export const { setMode,setUser, setLogin, setLogout, setProducts, setMenuon, setuserlogged,setuserloggedout, setadminlogged,setPdetails } = authSlice.actions; // part of redux-toolkit
export default authSlice.reducer;
