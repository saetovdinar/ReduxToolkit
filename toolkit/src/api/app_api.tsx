import axios from "axios";

// const API_KEY = '64405bd2';

const URL = "http://www.omdbapi.com/?apikey=64405bd2&";

export async function getSearchMovie(title: string) {
    const response = await axios.get(URL + `s=${title}`);
    
    return  response.data
}

export async function getMovieByID(id: string) {
    const response = await axios.get(URL + `i=${id}`);
    
    return  response.data
}



