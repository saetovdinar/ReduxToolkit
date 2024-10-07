'use client';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getSearchMovie} from '@/api/app_api';

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (title: string) => {
        const response = await getSearchMovie(title);
        return response
    }
);



export interface SearchState {
    value: string;
    movies: [];
    isLoading: boolean;
}

const initState: SearchState = {
    value: '',
    movies : [],
    isLoading: true
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initState,
    reducers: {
      setSearch: (state, action) => {
        state.value = action.payload
      },
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.fulfilled, (state: SearchState, action: any) => {
          state.movies = action.payload.Search;
          state.isLoading = true;
        })
        .addCase(fetchSearch.pending, (state: SearchState) => {
          state.isLoading = false;
        })
        .addCase(fetchSearch.rejected, (state: SearchState) => {
          state.isLoading = false;
        });
      

    }
  });

export const {setSearch} = searchSlice.actions;

export default searchSlice.reducer;