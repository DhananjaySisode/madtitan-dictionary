import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, Typography } from '@material-ui/core'
import React from 'react'
import DevList from './DevList'
import GitHubIcon from '@material-ui/icons/GitHub';

function About(props) {

    return (
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"About"}</DialogTitle>
        <DialogContent>
        <Typography>
              Developer
          </Typography>
          <DevList/>
          <Typography>
              Xtreme Dictionary - English dictionary with examples!
          </Typography><br />
          <Link
             href="https://github.com/DhananjaySisode/madtitan-dictionary" 
             target='_blank'
            >
            <GitHubIcon/>
            </Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default About
