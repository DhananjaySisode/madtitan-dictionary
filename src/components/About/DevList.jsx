import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import '../../styles/DevList.scss';
import React, { Fragment } from 'react';
import dhananjay_sisode from '../../assets/images/dhananjay_sisode.jpg';

function DevList() {
    return (
        <List className='dev-list-card'>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Dhananjay Sisode" src={dhananjay_sisode}/>
            </ListItemAvatar>
            <ListItemText
            primary="Dhananjay Sisode"
            secondary={
                <Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className='dev-list-inline'
                    color="textPrimary"
                >Product Developer
                </Typography>
                </Fragment>
            }
            />
        </ListItem>
        </List>
    )
}

export default DevList
