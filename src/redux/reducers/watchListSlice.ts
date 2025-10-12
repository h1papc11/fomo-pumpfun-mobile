import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateId } from '../../utils/function';

export interface WatchItem {
  id: string;
  name: string;
  isFavorite: boolean;
}

export interface WatchListState {
  watchLists: WatchItem[];
}

const initialState: WatchListState = {
  watchLists: [
    {
      id: generateId(),
      name: 'Default',
      isFavorite: false,
    },
  ],
};

const watchListSlice = createSlice({
  name: 'watchList',
  initialState,
  reducers: {
    addToWatchList(state, action: PayloadAction<string>) {
      const name = action.payload;
      if (!name) return;
      const id = generateId();
      // Prevent duplicate names (optional)
      const exists = state.watchLists.some(
        item => item.name.toLowerCase() === name.toLowerCase(),
      );
      if (!exists) state.watchLists.push({ id, name, isFavorite: false });
    },

    addAsFavorite(
      state,
      action: PayloadAction<{ id: string; isFavorite: boolean }>,
    ) {
      const { id, isFavorite } = action.payload;
      state.watchLists = state.watchLists.map(item =>
        item.id === id ? { ...item, isFavorite } : item,
      );
    },

    removeFromWatchList(state, action: PayloadAction<string>) {
      state.watchLists = state.watchLists.filter(
        item => item.id !== action.payload,
      );
    },

    clearWatchList(state) {
      state.watchLists = [];
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  clearWatchList,
  addAsFavorite,
} = watchListSlice.actions;

export default watchListSlice.reducer;
