import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardTemplate from './CardTemplate';

export default function CartaoVar(){  
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
            <CardTemplate nomeVariavel='Variável 1' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '/>
            <CardTemplate nomeVariavel='Variável 2' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '/>
            <CardTemplate nomeVariavel='Variável 3' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '/>
            <CardTemplate nomeVariavel='Variável 4' descricao='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '/>
                
            </Box>
        </Container>
    )
}