import { combineSlices } from '@reduxjs/toolkit';
import authSlice from './authSlice';
const rootReducer = combineSlices({
    auth: authSlice,
});

export default rootReducer;
