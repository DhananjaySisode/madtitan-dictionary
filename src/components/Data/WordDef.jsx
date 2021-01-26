import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import '../../styles/Data.scss'

function WordDef(props) {
    return (
        <Card className>
        <CardContent>
            <Typography className='typeo-italic' component="h1">
                {props.type}
            </Typography>
            <Typography component="h2">
                {props.definition}
            </Typography>
            <Typography color="textSecondary">
                {props.example}
            </Typography>
        </CardContent>
        </Card>
    )
}

export default WordDef
