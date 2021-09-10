
import {
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE
} from './actiontypes';

const initialState = {
    characters: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                error: '',
                isLoading: false
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                isLoading: false,
                characters: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer;