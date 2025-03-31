import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null, token: null,
    status:'idle',error:null
}
export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, thunkApi) => {
    try {
        console.log('Tentative de login avec', email, password);
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        console.log('Réponse brute du serveur :', response);
        const data = await response.json();
        if (!response.ok) {
            return thunkApi.rejectWithValue(data.message || 'Erreur de connexion')
        }
        return data.body;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {  state.status = 'loading';
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.status ='succeeded';
            state.user = action.payload;
            state.token = action.payload.token;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status ='failed';
            state.error =action.payload;
          });
    }
    
})
export default authSlice.reducer;