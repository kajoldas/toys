import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
const Navbar = () => {

  const { user , logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{backgroundColor:'#26262b'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              Baby Toys
            </Typography >
            <Link to="/home"><Button style={{color:'white'}} variant="text" >Home</Button></Link>
            <Link to="/all-products"><Button style={{color:'white'}} variant="text" >Explore </Button></Link>
            {
              user?.email ?
              <Box>
                  <NavLink to="/DashBoard">
                <Button style={{color:'white', textDecoration:'none'}} variant="text" color="inherit" >DashBoard</Button>
                </NavLink>
                  <NavLink to="/add-reviews">
                <Button style={{color:'white', textDecoration:'none'}} variant="text" color="inherit" >Add Reviews</Button>
                </NavLink>
                  <NavLink to="/add-products">
                <Button style={{color:'white', textDecoration:'none'}} variant="text" color="inherit" >Add Product</Button>
                </NavLink>
                <NavLink onClick={logOut} to="/logout">
                  <Button style={{color:'white'}} variant="text" color="inherit" >Logout</Button>
                  </NavLink>
              </Box>
              :
              <NavLink to="/login">
                <Button style={{color:'white', textDecoration:'none'}} variant="text" color="inherit" >Login</Button>
                </NavLink>
            }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navbar;