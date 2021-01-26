import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info';
import { Avatar, IconButton } from '@material-ui/core';
import './../../styles/NavBar.scss';
import About from '../About/About';
import logo from '../../assets/images/dictionary.png';

function NavBar() {
    const [openAbout, setOpenAbout] = useState(false);
    const handleClose = (event) => { 
        setOpenAbout(!openAbout);
    };

    return (
        <div className='navbar-flex'>
            <AppBar color='primary'>
                <Toolbar>
                    <Avatar variant='square' alt="Xtreme Dictionary" src={logo}/>
                    <Typography variant='h6' className='navbar-flex'>
                        Xtreme Dictionary
                    </Typography>
                    <div>
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleClose}
                            color="inherit"
                        >
                        <InfoIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <About open={openAbout} handleClose={handleClose}/>
        </div>
    )
}

export default NavBar
