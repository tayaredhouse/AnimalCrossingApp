import { FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "./actiontypes";
import axios from 'axios';

export const fetchCharactersRequest = () => {
    return {
        type: FETCH_CHARACTERS_REQUEST
    }
}

const fetchCharactersSuccess = characters => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters
    }
}

const fetchCharactersFailure = error => {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error
    }
}

export const fetchCharacters = () => {
    return (dispatch) => {
        dispatch(fetchCharactersRequest)
         axios.get('https://acnhapi.com/v1/villagers')
        .then(response => {
            const characters = Object.entries(response.data)
            dispatch(fetchCharactersSuccess(characters))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchCharactersFailure(errorMsg))
        })
    }
}