import { Grid } from '@material-ui/core'
import '../../styles/Data.scss'
import React from 'react'
import WordDetails from './WordDetails'
import WordDef from './WordDef'

function Data(props) {

    const ListDef = props.wordData.definitions.map(def =>{
        return (
            <Grid item xs={12}>
                <WordDef type={def.type} definition={def.definition} example={def.example}/>
            </Grid>)
    });

    return (
        <div className='data-grid'>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <WordDetails word={props.wordData.word} pronounced={props.wordData.pronunciation}/>
                </Grid>
                {ListDef}
            </Grid>
        </div>
    )
}

export default Data
