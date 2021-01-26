import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import '../../styles/Search.scss';
import error_404 from '../../assets/images/404.png';
import Data from '../Data/Data';

function Search() {

    const [searchText, setSearchText] = useState('');
    const [wordData, setWordData] = useState({});
    const [inValidWord, setinValidWord] = useState(false);

    const searchInDictionary = () => {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Token "+process.env.REACT_APP_TOKEN);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("https://owlbot.info/api/v4/dictionary/"+searchText, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result[0]?.message === "No definition :(") {
                setinValidWord(true);
            } else{
                setinValidWord(false);
                setWordData(result);
            }

        })
        .catch(error => setinValidWord(true));
    }

    const handleKeyDown  = (e) => {
        if (e.key === 'Enter') {
            searchInDictionary();
        }
    }
    
    return (
        <>
        <div className='flex'>
            <TextField className='textfield-bg-color' fullWidth id="word" label="Search Word" variant='outlined' color='primary' onKeyDown={handleKeyDown} onChange={event => setSearchText(event.target.value)}/>
            <Button variant="contained" color='primary' onClick={searchInDictionary}>Search</Button>
        </div>
        {inValidWord? [
            <><div className='error-div'>
                <img src={error_404} className='error-img' alt="not found!"/><br />
            </div>
            <Typography variant='h4' align='center'>Word not found!</Typography></>
        ]:null}
        {Object.keys(wordData).length !== 0 && !inValidWord? <Data wordData={wordData}/>:null}
        </>
    )
}

export default Search
