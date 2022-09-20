import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import CardTemplate from './CardTemplate';
import CardList from './CardList2';

export default function CardBox(props){  
    return(
        <Container component="main">
            <Box 
                m={10}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexBasis: 'auto',
                    // flexDirection: 'column',
                    alignItems: 'flex-start',
                    alignContent: 'center',
                    justifyContent: 'center',
                    }}
            >
            <CardList fetchlink = {props.fetchlink}/>
            </Box>
        </Container>
    )
}