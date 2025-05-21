import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../componets/feature/authSlice';

const store = configureStore({
    reducer: { 
        auth: authReducer,
    }
});

export default store;