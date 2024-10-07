'use client';
import {createSlice} from '@reduxjs/toolkit';



interface favoriteProps {
    Poster: string;
    Title: string;
    imdbID: string;
}

export interface favoriteState {
    isLoading: boolean;
    favotiteStore: favoriteProps[];
};
 


const initState: favoriteState = {
    favotiteStore: [],
    isLoading: false
}

export const favoriteSlice = createSlice({
    name: 'favoriteMovie',
    initialState: initState,
    reducers: {
        setFavorite: (state, action) => {
            
            state.favotiteStore = [...state.favotiteStore, action.payload];
        
        },
        deleteFavorite: (state, action) => {
            
            state.favotiteStore = [...state.favotiteStore.filter((item) => item.imdbID !== action.payload)];
        },
      
    },
    

  })


export const {setFavorite, deleteFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;