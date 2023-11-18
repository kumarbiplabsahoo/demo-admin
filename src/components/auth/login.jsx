import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { InputField } from './inputField';
import '../../assets/css/login/index.css'

export const Login = () => {

    const [name, setName] = useState("None")
    const [newName, setNewName] = useState("")

    const handleName = () => {
        setName(newName)
    }

    return (
        <div className="cardContainer">
            <Card sx={{ minWidth: 275 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Name:{name}
                </Typography>
                <InputField setNewName={setNewName} handleName={handleName} />
            </Card>
        </div>
    )
}
