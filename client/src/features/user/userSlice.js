import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { 
    user: null,
    like: false,
    dislike: false,
    love: false},
  reducers: {
    login: (state, action) => {      
      state.user = action.payload;      
    },
    logout: (state) => {
      state.user = null;     
    },
    likeA: (state) =>{
      state.like = !state.like;
    },
    dislikeA: (state) =>{
      state.dislike = !state.dislike
    },
    loveA: (state) =>{
      state.love = !state.love
    }
  },
});

export const {login, logout, likeA, dislikeA, loveA} = userSlice.actions;
export const selectUser = (state) => state.user.user
export const selectLike = (state) => state.user.like
export const selectDislike = (state) => state.user.dislike
export const selectLove = (state) => state.user.love
export default userSlice.reducer;