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

interface selectedMovieProps {
    Poster: string;
    Title: string;

    Year: string;
    imdbID: string;
    Genre: string;
    Director: string;
    Actors: string;
    Runtime: string;
    imdbRating: string;
}
export interface movieState {
    isLoading: boolean;
    selectedMovie: selectedMovieProps;
};
 


const initState: movieState = {
    selectedMovie: {
      Poster: '',
      Title: '',
      Genre: '',
      Director: '',
      Actors: '',
      Runtime: '',
      imdbRating: '',
      Year: '',
      imdbID: '',
    },
    isLoading: false
}

export const movieSlice = createSlice({
    name: 'selectedMovie',
    initialState: initState,
    reducers: {
     
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovieId.fulfilled, (state: movieState, action: {payload: selectedMovieProps}) => {
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