import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import CardTemplate from './CardTemplate';
import EditCardList from './EditCardList';

export default function EditCardBox(props){  
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
                    margin: 0,
                    }}
            >
            <EditCardList fetchlink = {props.fetchlink}/>
            </Box>
        </Container>
    )
}