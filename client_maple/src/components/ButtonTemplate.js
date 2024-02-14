import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function ButtonTemplate(props){
    return(
        <Button component={Link} to={props.link+'/'+props.id}> {props.text} 
            {/*<AddCircleRoundedIcon
                sx={{
                    mt: '-5px',
                    ml: '5px',
                    fontSize: '16px',
                    textAlign: 'center',
                }}
            />*/}
        </Button>
    )
}