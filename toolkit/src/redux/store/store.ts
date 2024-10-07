'use client';

import { configureStore } from "@reduxjs/toolkit";
import {searchSlice} from "../features/search/searchSlice";
import {movieSlice} from "../features/movies/movieSlice";
import {favoriteSlice} from "../features/favorite/favoriteSlice";
export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    movie: movieSlice.reducer,
    favorite: favoriteSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;