import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
    loading: false,
    users: [],
    error: '',
}

export const fetchUsers = createAsyncThunk('apiUser/fetchUsers', ()=>{
    return api
        .get("users")
        .then((response)=> response.data)
})

const apiUserSlice = createSlice({
    name: 'apiUser',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.users = action.payload 
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default apiUserSlice.reducer