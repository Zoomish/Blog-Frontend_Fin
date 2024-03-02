import { configureStore, CombineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'


export const store = configureStore({
    reducer: {
        user: userReducer
    },
})