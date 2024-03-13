import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})