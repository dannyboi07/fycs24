import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import Icon from '@mui/material/Icon';

let labelTheme = <DarkModeTwoToneIcon/>;

const Navbar = (props) => {

    const tChangeOnClick = (e) => {
        if (e.target.checked) {
            props.setThemeToggle(true);
            labelTheme = <LightModeIcon/>;
        }
        else {
            props.setThemeToggle(false)
            labelTheme = <DarkModeTwoToneIcon/>;
        } 
    }

    return (
        <AppBar className={props.className} enableColorOnDark="true">
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1, paddingLeft: 15 }}>
                    Calculator
                </Typography>
                <FormControlLabel control={<Switch color="secondary" onChange={tChangeOnClick/*(e) => e.target.checked === true ? props.setThemeToggle(true) : props.setThemeToggle(false)*/}/>} label=""/>
                <Icon>{labelTheme}</Icon>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
