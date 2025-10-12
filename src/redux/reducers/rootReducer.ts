import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import watchListSlice from './watchListSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  watchList: watchListSlice,
});

export default rootReducer;
