import React from 'react'


function CharacterCard({data}) {
    /* It is destructuring the data that was put into this component at Character Profile   */
const {name, birthday, personality, image_uri, saying, hobby} = data;
    return (
        <div className="cardcontainer">
           <h3>{name["name-USen"]}</h3>
            <div className="imgcontainer">
                <img src={image_uri} alt=""/>
            </div>
            <div className="sayingcontainer">
                <p>"{saying}"</p>
           </div>
           <div className="info">
            <p>Birthday: {birthday}</p>
            <p>Personality: {personality}</p>
            <p>Hobby: {hobby}</p>
           </div>
          
        </div>
    )
}

export default CharacterCard
