import React from 'react';
import { useState, useEffect } from 'react'
import CardTemplate from './CardTemplate';

const CardList = (props) => {
  const [data, setData] = useState([{}])
  useEffect(() => {
    console.log(data)

    fetch('/maple_characters').then(
      res => res.json()
    ).then(
      a => {
        setData(a)
        console.log(a)
      }
    )
  }, [])
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      {(typeof data.characters === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        // data.characters.map((character, i) => (
        //   <p key={i}>{character['name']}</p>
        // ))
        data.characters.map((character, i) => (
          <CardTemplate key = {i} nomeVariavel={character['name']} descricao={character['job']}/>
        ))
        // <div/>
        // data.character.map((character, i) => <CardTemplate key={i} nomeVariavel={character['name']} descricao={character['name']} />)
      )}
    </div>
    
  );
}

export default CardList;