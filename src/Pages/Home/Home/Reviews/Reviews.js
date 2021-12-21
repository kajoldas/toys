import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../../../Review/Review';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    
    useEffect( () => {
        fetch('https://fathomless-springs-03872.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    } , [])
    return (
        <Container sx={{mt:9, mb:9}}>
            <h1 style={{paddingBottom:'80px'}} >All reviews</h1>

            <Grid container spacing={2}>
                {
                    reviews.map(reviews => <Review
                    key={reviews._id}
                    reviews={reviews}
                    >
                    </Review>)
                }

            </Grid>

        </Container>
    );
};

export default Reviews;