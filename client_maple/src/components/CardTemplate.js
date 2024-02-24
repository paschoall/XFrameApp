import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ButtonTemplate from './ButtonTemplate';

export default function CardTemplate(props) {
    return (
        <Card
            sx={{
                minHeight: '16rem',
                maxHeight: '20rem',
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
                    width: '100%',
                }}
            >
                <Typography
                    gutterBottom
                    variant='h4'
                    sx={{
                        fontSize: '1.5rem',
                    }}
                >
                    {props.nomeVariavel}
                </Typography>
                <Typography
                    // noWrap
                    variant=''
                    sx={{
                        marginBottom: '1rem',
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
                <ButtonTemplate link={props.link} id={props.id} text={'Read more'} />
            </CardContent>
        </Card>
    )
}