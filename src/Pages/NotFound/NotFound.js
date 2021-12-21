import React from 'react';
import notfound from './../../images/404.jpg'
const NotFound = () => {
    return (
        <div style={{paddingTop:'100px',paddingBottom:'100px' }}>
            <img style={{height:'400px'}} sx={{mt:40}} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;