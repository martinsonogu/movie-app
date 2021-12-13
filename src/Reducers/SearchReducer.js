import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "../Components/actions/types";

const initialState = {
    text: "",
    movies: [],
    isLoading: false,
    movie: []

}

export default function foo(state = initialState, action) {
    switch(action.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                isLoading: false,
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                isLoading: false
            };
            case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                isLoading: false
            };
            case LOADING:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state
    }
};