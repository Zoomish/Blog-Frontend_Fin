import { configureStore, CombineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer } from 'redux-persist'

const rootReducer = CombineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
}

const persistedReducer = persistReducer(persistConfig)

export const store = configureStore({
    reducer: {
        rootReducer
    },
})