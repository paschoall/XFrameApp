import React from 'react';
import { useState, useEffect } from 'react'
import CardTemplate from './CardTemplate';

const CardList = (props) => {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch(props.fetchlink).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [props.fetchlink])

  // const numbers = [1, 2, 3, 4, 5];

  return (
      (typeof data.characters === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.characters.map((character, i) => (
          <CardTemplate key = {i} nomeVariavel={character['name']} descricao={character['job']}/>
        ))
      )
  );
}

export default CardList;