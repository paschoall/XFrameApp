import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import CardTemplate from './CardTemplate';
import CardList from './CardList';

export default function CardBox(props){  
    return(
        <Container component="main">
            <Box 
                m={10}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                    
                    }}
            >
            <CardList charactes = {props.commonProps}/>
            </Box>
        </Container>
    )
}