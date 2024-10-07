'use client';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getMovieByID} from '@/api/app_api';


export const fetchMovieId = createAsyncThunk(
    'id/fetchMovieId',
    async (id: string) => {
        const response = await getMovieByID(id);
        return response
    }
);


export interface movieState {
    isLoading: boolean;
    selectedMovie: any;
};
 


const initState: movieState = {
    selectedMovie: {},
    isLoading: false
}

export const movieSlice = createSlice({
    name: 'selectedMovie',
    initialState: initState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovieId.fulfilled, (state: movieState, action: any) => {
            state.selectedMovie = action.payload;
            state.isLoading = true;
        })
        .addCase(fetchMovieId.pending, (state: movieState) => {
            state.isLoading = false;
        })
        .addCase(fetchMovieId.rejected, (state: movieState) => {
            state.isLoading = false;
        });
    },

  })



export default movieSlice.reducer;