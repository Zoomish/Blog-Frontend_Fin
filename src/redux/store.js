import { configureStore, CombineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

const rootReducer = CombineReducers({
    user: userReducer
})

export const store = configureStore({
    reducer: {
        rootReducer
    },
})