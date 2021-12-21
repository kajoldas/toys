import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState} from 'react';
import { NavLink , useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import login from './../../../images/login.jpg'
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError,signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history);  // location, history
        e.preventDefault();
    }

    const handleGoogleSignIn = e  => {
        signInWithGoogle(location, history);

        e.preventDefault();
    }
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        
                        <TextField
                            
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                            
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        <h4>or,</h4>
                        <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleSignIn} variant="contained">Sign In With Google</Button>
                    </form>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                
            </Grid>
        </Container>


        // <div className="login-body">
            
                
        //         <div className="login-box">
        //     <form onSubmit={handleLoginSubmit}>
        //             <h1>Login</h1>
        //             <div className="textbox">
        //                 <i className="fas fa-user"></i>
        //                 <input type="text" placeholder="Username"/>
        //             </div>

        //             <div className="textbox">
        //                 <i className="fas fa-lock"></i>
        //                 <input type="password" placeholder="Password"/>
        //             </div>
        //                 <input onSubmit={handleLoginSubmit} type="button" className="btn" value="Sign in"/>
        //      </form>
        //         </div>
        // </div>
    );
};

export default Login;