import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

export default function ButtonTemplate(props){
    return(
        <Button component={Link} to={props.link+'/'+props.id}> {props.text} </Button>
    )
}