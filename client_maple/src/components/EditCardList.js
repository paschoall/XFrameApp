import React from 'react';
import { Toolbar } from '@mui/material';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import EditCardTemplate from './EditCardTemplate';
import Grid from '@mui/material/Grid';

const EditCardList = (props) => {
  const [data, setData] = useState([{}])
  const location = useLocation()
  
  useEffect(() => {
    fetch(props.fetchlink + 's').then(
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
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
    >
      {
        (typeof data.data === 'undefined' || Object.keys(data.data).length === 0) ? (
          <>
            <Toolbar /><p>Loading...</p>
          </>
        ) : (
          (Object.keys(data.data).length === 0) ? (
            <p><Toolbar />Nothing Found</p>
          ) : (
            data.data.map((data, i) => {
              return (
                <Grid
                  item
                  key={data['id']}
                  xs={12} md={6}
                >
                  <EditCardTemplate
                    id={data['id']}
                    link={location.pathname}
                    nomeVariavel={data['name']}
                    descricao={data['description']}
                    fetchlink={props.fetchlink}
                  />
                </Grid>
              )
            }
            )
          )
        )
      }
    </Grid>
  );
}

export default EditCardList;