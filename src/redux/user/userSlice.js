import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
        },
        loginFailed: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        logout: (state) => {
            state.currentUser = null
        }
    }
})