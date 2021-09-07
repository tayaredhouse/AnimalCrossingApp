import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import {connect} from 'react-redux';
import {fetchCharacters} from '../features/characterActions';

function CharacterProfile()  {
   
    return (
        <div>
            <h1>Animal Crossing Profile Page</h1>
            <p>Characters</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characterData: state.
    }
}
export default CharacterProfile
