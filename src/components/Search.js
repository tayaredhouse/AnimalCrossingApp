import React from 'react'
import {useDispatch} from 'react-redux';
import { getCharacters } from '../features/character';

function Search() {
    const dispatch = useDispatch();


    return (
        <div>
            <input type="text" placeholder="Search Characters..."></input>
            <button>Enter</button>
        </div>
    )
}

export default Search
