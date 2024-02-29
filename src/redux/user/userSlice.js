import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
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

export const { signInStart, signInSuccess, signInFailed, signOut } = userSlice.actions

export default userSlice.reducer