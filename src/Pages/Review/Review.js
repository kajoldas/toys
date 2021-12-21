import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Review = ({reviews}) => {
    const {name, comment, rating} = reviews;
    return (
        <Grid item xs={12} sm={6} md={6} >
            <Paper sx={{ display: 'flex',mb:4,  px:4, py:4 }} elevation={3} >
                 <div >
                 <Typography sx={{mr:5, pl:2}} variant="h6" gutterBottom component="div">
                   {name}
                </Typography>
                 </div>
                <div sx={{ display:'flex', flexDirection: 'column' , justifyContent: 'flex-start'}}>
                <Typography sx={{ textAlign: 'left'}} variant="subtitle2" gutterBottom component="div">
                    {comment}
                </Typography>
                <Typography sx={{ textAlign: 'left'}} variant="caption" display="block" gutterBottom>
                Rating Given: {rating}
                </Typography>
                </div>
            </Paper>
        </Grid>
    );
};

export default Review;