import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const InputField = (props) => {
    const {
        setNewName, 
        handleName
    } = props
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) => setNewName(e.target.value)}
            />
            <Button onClick={handleName} variant="contained">Contained</Button>
        </div>
    )
}
