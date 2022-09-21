import React from 'react';
import CardTemplate from './CardTemplate';
import Grid from '@mui/material/Grid';

const CardList = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  console.log(props)
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {numbers.map(
        (number, i) => {
          if (i === 1) {
            return (
              <Grid key={i} item xs={12} md={6}>
                <CardTemplate
                  key={i} nomeVariavel={number}
                  descricao="
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  "
                />
              </Grid>
            )
          }
          else {
            return (
              <Grid key={i} item xs={12} md={6}>
                <CardTemplate
                  key={i} nomeVariavel={number}
                  descricao="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                />
              </Grid>
            )
          }
        }
      )}
    </Grid>
  );
}

export default CardList;