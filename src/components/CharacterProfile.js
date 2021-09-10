import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchCharacters} from '../features/characterActions';
import CharacterCard from './CharacterCard';
import {MoonLoader} from 'react-spinners'

function CharacterProfile({fetchCharacters, characterData})  {
const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        fetchCharacters()
    }, [])

        /* This function maps through the API data and checks if it matches with the user's search term
        if it does not match, or there is no string it will just show all cards for characters*/
        const listVillagers = 
        characterData.characters.filter((villager)=>{
            
            if (searchTerm == "") {
                return villager
            } else if (villager[1].name['name-EUen'].toLowerCase().includes(searchTerm.toLowerCase())){
                
                return villager
            }
        }).map((villager) =>
             <CharacterCard 
             key={villager.key} 
             data={villager[1]} 
            />
        );


    return (
        <div>
            <nav>
                <input
                type="text" 
                placeholder="Search Villagers..." 
                onChange={(e) => {
                setSearchTerm(e.target.value);
                }}
                />

        </nav>
            <h1>✨Animal Crossing Villagers✨</h1>
            <div>
                {characterData.isLoading ? (
                <div className="loading">
                    <MoonLoader/>
                </div>
                 ) : characterData.error ? (
                <h2>{characterData.error}</h2>
                 ) : (
                <div className="main">
                    { 
                    listVillagers
                    }
                </div>
        )}
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