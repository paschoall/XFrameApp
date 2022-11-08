import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import CardTemplate from './CardTemplate';
import Grid from '@mui/material/Grid';

const CardList = (props) => {
  const [data, setData] = useState([{}])
  const location = useLocation()
  
  useEffect(() => {
    fetch(props.fetchlink).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [props.fetchlink])
  // const numbers = [1, 2, 3, 4, 5];

  return (
    <Grid container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {
        (typeof data.data === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.data.map((data, i) => {
            return (
              <Grid
                item
                key={data['id']}
                xs={12} md={6}
              >
                <CardTemplate
                  id={data['id']}
                  link={location.pathname}
                  nomeVariavel={data['name']}
                  descricao={data['description']}
                />
              </Grid>
            )
          }
          )
        )
      }
    </Grid>
  );
}

export default CardList;