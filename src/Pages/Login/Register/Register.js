import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from './../../../images/login.jpg'
import useAuth from './../../../hooks/useAuth'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user,  registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
        // console.log(field, newLoginData[field]);
    }
    const handleLoginSubmit = e => {
        
        // loginUser(loginData.email, loginData.password);  //, location, history
        if(loginData.password !== loginData.confirmPassword){
            alert('Your password Not Matched, Type Again');
            return
        }
        registerUser(loginData.email, loginData.password, history, loginData.name)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h3" gutterBottom>Register Here!</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        
                    <TextField
                            
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Full Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="outlined"  />
                            
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" 
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="outlined" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" 
                            label="Confirm Your Password"
                            type="password"
                            name="confirmPassword"
                            onBlur={handleOnBlur}
                            variant="outlined" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register Now</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Sign in Here</Button>
                        </NavLink>
                    </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                
            </Grid>
        </Container>
    );
};

export default Register;