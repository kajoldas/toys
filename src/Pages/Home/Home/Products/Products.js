import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Product from '../../../Product.js/Product';
import { Typography } from '@mui/material';

const Products = () => {
    
    const [toys, setToys] = useState([]);
    
    useEffect ( () => {
        fetch('https://fathomless-springs-03872.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setToys(data))
    }, [])
    return (
        
        <Box sx={{ flexGrow: 1, mt:10 }}>
                <Typography sx={{mb:9, pb:2, fontWeight: 700, color: 'primary.main'}} variant="h5" component="div">
                        Our Products    
                </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        toys.slice(0,6).map(toy=> <Product
                            key={toy.name}
                            toy={toy}
                        ></Product>)
                    }
                </Grid>

            </Container>
      </Box>
    );
};

export default Products;