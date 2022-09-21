import React from 'react';
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { asyncToggleTheme } from "../store/reducers/themeSlice";

const ThemeToggler = () => {
    const dispatch = useDispatch();
    // const darkMode = useSelector((state) => state.theme.darkMode);
    
    const theme = useTheme();

    return (
            <IconButton
                sx={{ ml: 1 }}
                onClick={() => dispatch(asyncToggleTheme())}
                color="inherit"
            >
                {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
    );
}

export default ThemeToggler