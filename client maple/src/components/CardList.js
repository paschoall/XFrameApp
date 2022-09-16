import React from 'react';
import CardTemplate from './CardTemplate';

const CardList = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  // console.log(props)
  return (
      numbers.map( (number, i) => <CardTemplate key = {i} nomeVariavel={number} descricao={number}/>)
  );
}

export default CardList;