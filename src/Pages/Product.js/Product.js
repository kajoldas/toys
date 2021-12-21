import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';




const Product = (props) => {
    const {_id,name,description,price,img} = props.toy;

    return (
        <Grid item xs={4} sm={4} md={4} sx={{mb:2, px:2}} >
        <Card sx={{ minWidth: 275,  height: '100%' }}>
        <CardMedia
        component="img"
        style={{width:'auto',height:'100px',margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />

      <CardContent>
       
        <Typography variant="h5" component="div">
         {name}
        </Typography>
       
        <Typography variant="body2"
         color="text.secondary" >
         {description}
        </Typography>
        <Typography variant="body2">
          Price:{price}
        </Typography>
       

      </CardContent>
      <CardActions>
       <Link style={{marginLeft:'100px'}} to={`/order/${_id}`}> <Button sx={{width: 'auto'}} variant="contained" >Buy Now</Button></Link>
      </CardActions>
    </Card> 

        </Grid>
    );
};

export default Product;