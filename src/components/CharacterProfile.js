import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCharacters} from '../features/characterActions';
import CharacterCard from './CharacterCard';



function CharacterProfile({fetchCharacters, characterData})  {



    useEffect(() => {
        fetchCharacters()
    }, [])


    const listVillagers = characterData.characters.map((data,indx) =>
    <CharacterCard key={indx} data={data} />
    )
  
    console.log(listVillagers)

    return characterData.isLoading ? (
        <h2>Loading...</h2>
    ) : characterData.error ? (
        <h2>{characterData.error}</h2>
    ) : (
        <div>
            <h2>Animal Crossing Villagers</h2>
            <div>
                {listVillagers}
            </div>
    
    </div>
    
    )}


const mapStateToProps = state => {
    return {
        characterData: state.character
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCharacters: () => dispatch(fetchCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfile)