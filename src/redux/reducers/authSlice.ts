import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
    },
    reducers: {
        checkUserLogin: () => { },
    },
});

export const {
    checkUserLogin
} = authSlice.actions;
export default authSlice.reducer;
