import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
                        toys.map(toy=>

                            // const {_id,name,description,price,img} = props.toy;

                            <Grid item xs={4} sm={4} md={4} sx={{mb:2, px:2}} >
                            <Card sx={{ minWidth: 275,  height: '100%' }}>
                            <CardMedia
                            component="img"
                            style={{width:'auto',height:'100px',margin:'0 auto'}}
                            image={toy.img}
                            alt="Paella dish"
                          />
                    
                          <CardContent>
                           
                            <Typography variant="h5" component="div">
                             {toy.name}
                            </Typography>
                           
                            <Typography variant="body2"
                             color="text.secondary" >
                             {toy.description}
                            </Typography>
                            <Typography variant="body2">
                              Price:{toy.price}
                            </Typography>
                           
                    
                          </CardContent>
                          <CardActions>
                           {/* <Link style={{marginLeft:'100px'}} to={`/order/${_id}`}> <Button sx={{ml:'40%'}} variant="contained" >Buy Now</Button></Link> */}
                          </CardActions>
                        </Card> 
                    
                            </Grid>
                            )
                    }
                </Grid>

            </Container>
      </Box>
    );
};

export default Products;