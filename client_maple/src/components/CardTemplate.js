import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ButtonTemplate from './ButtonTemplate';

export default function CardTemplate(props) {
    return (
        <Card
            sx={{
                minHeight: '15rem',
                maxHeight: '15rem',
                margin: 'auto',
                marginTop: '1rem',
                textAlign: 'left',
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
                    // noWrap
                    variant=''
                    sx={{
                        marginBottom: '0.5rem',
                        height: '6em',
                        fontSize: '1rem',
                        lineHeight: '1.5em',
                        fontWeight: 'normal',
                        width: '100%',

                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {props.descricao}
                </Typography>
                <ButtonTemplate link={props.link} id={props.id} text={'Leia Mais'} />
            </CardContent>
        </Card>
    )
}