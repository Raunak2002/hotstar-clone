import { createSlice } from '@reduxjs/toolkit';

const initialState = {                                           // INITAL STATE
    recommend: null,
    newDisney: null,
    original: null,
    trending: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{                                                     // REDUCER
        setMovies(state,action){
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

export const {setMovies} = movieSlice.actions; 
export const selectOriginal = (state) => state.movie.original
export const selectRecommend = (state) => state.movie.recommend
export const selectNewDisney = (state) => state.movie.newDisney
export const selectTrending = (state) => state.movie.trending

export default movieSlice.reducer;