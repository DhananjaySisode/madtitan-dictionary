import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function WordDetails(props) {
    return (
        <Card className>
        <CardContent>
            <Typography variant="h5" component="h2">
            {props.word}
            </Typography>
            <Typography color="textSecondary">
            /{props.pronounced}/
            </Typography>
        </CardContent>
        </Card>
    )
}

export default WordDetails
