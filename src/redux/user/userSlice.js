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
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
        },
        signInFailed: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        signOut: (state) => {
            state.currentUser = null
        }
    }
})