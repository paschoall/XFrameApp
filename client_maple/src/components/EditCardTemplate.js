import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ButtonTemplate from './ButtonTemplate';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCardTemplate(props) {
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (open === true) {
            setOpen(!open);
        }
        setOpen(!open);
    }

    useEffect(() => {
        setOpenError(openError);
    }, [openError])

    useEffect(() => {
        setOpen(open);
    }, [open])

    
    const handleClose = (deleteFlag, id) => {
        if (deleteFlag) {
            const requestOptions = {
                method: 'DELETE',
            }

            fetch(props.fetchlink + '/' + id, requestOptions).then(
                response => {
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    console.log(response)
                    return response.json()
                }).then(
                    data => {
                        console.log(data)
                        navigate(0)
                    }
                ).catch(
                    (error) => {
                        console.error('There has been a problem with your delete operation:', error);
                        setOpenError(true)
                    }
                )

        }
        setOpen(false);
    };

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
                <Grid
                    container spacing={2}
                    rowSpacing={1}
                    sx={{
                        margin: '0'
                    }}
                >
                    <Grid item xs={12} md={9} lg={9} >
                        <ButtonTemplate link={props.link} id={props.id} text={'Edit'} />
                    </Grid>

                    <Grid item xs={12} md={3} lg={3} >
                        <Button onClick={handleClick}>Delete</Button>
                    </Grid>
                </Grid>
            </CardContent>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    DELETE
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(true, props.id)} autoFocus>
                        Delete
                    </Button>
                    <Button onClick={() => handleClose()} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}