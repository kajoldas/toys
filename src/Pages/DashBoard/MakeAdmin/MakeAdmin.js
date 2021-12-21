import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleNewAdminSubmit = e =>{
        const user = {email};
        fetch('https://fathomless-springs-03872.herokuapp.com/users/admin', {
            method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
         body: JSON.stringify(user)   
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        e.preventDefault();
    } 
    return (
        <div>
            <h4>MakeAdmin</h4>
            <form onSubmit={handleNewAdminSubmit}>
            <TextField id="standard-basic" 
             variant="standard"
             type="email"
             label="Enter New Admin Email"
             onBlur={handleOnBlur}
             />
            <Button type="submit" variant="contained">Make New Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;