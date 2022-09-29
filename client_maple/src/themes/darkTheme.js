import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
    palette: {

        // mode: 'dark',

        // palette values for dark mode
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
            default: deepOrange[900],
            paper: deepOrange[900],
        },
        text: {
            primary: '#fff',
            secondary: grey[500],
        },

    },
})





export default darkTheme