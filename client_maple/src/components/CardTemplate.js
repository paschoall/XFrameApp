import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ButtonTemplate from './ButtonTemplate';

export default function CardTemplate(props){
        return(
        <Card
            sx={{
                minHeight: '10rem',
                minWidth: '30rem',
                marginTop: '3rem',
                textAlign: 'left',
                maxWidth: '10rem',
                display: 'flex',
                flexWrap: 'wrap',
                }}
        >
            <CardContent 
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                <Typography 
                    variant='h4'
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: '700'
                    }}
                >
                    {props.nomeVariavel}
                </Typography>
                <Typography
                    variant=''
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 'normal',
                        width: '100%'
                    }}>
                    {props.descricao}
                </Typography>
                <ButtonTemplate/>
            </CardContent>
        </Card>
    )
}