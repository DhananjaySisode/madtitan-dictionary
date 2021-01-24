import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';
import './../../styles/NavBar.scss';

function NavBar() {

    const handleMenu = (event) => {
        alert('Hiii');
    };

    return (
        <div className='navbar-appbar-flex'>
            <AppBar>
                <Toolbar>
                    <Typography>
                        Xtreme Dictionary
                    </Typography>
                    <div>
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <InfoIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
