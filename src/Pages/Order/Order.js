import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../hooks/useAuth'
import { Grid } from '@mui/material';

const Order = () => {
    const {orderId} = useParams();

    const [product , setProduct] = useState();

    // const email = localStorage.getItem('email');
    const { register, handleSubmit, reset } = useForm();

    //--------Get user name From useAuth
    const {user, email} =useAuth();

    const onSubmit = data => {
        data.email = user.email;
        console.log(data)
          axios.post('https://fathomless-springs-03872.herokuapp.com/place-order', data )
          .then(res => {
              console.log(res)
              if(res.data.insertedId){
                  alert('Your Order Completed Successfully')
                  reset();
              }
          })

      };

    //   console.log(product);
    useEffect( () => {
        fetch(`https://fathomless-springs-03872.herokuapp.com/products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    
    return (
        <div >
            <h1 className="product " >Order Place</h1>
            <h2>This is booking, Id no: {orderId}</h2>


            <div >
                <Grid  container spacing={2}>
                  <Grid xs={12} md={6}>
                  <form style={{ display: 'flex',  flexDirection: 'column' , justifyContent:'center', padding:'100px', margin:'50px' }} className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , padding:'10px', margin:'10px' }} {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" defaultValue={user.displayName} />
                    <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , padding:'10px', margin:'10px' }} type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
                    <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , padding:'10px', margin:'10px' }} type="number" {...register("phone")} placeholder="Phone" defaultValue={user.phone} />
                    <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , padding:'10px', margin:'10px' }} type="number" {...register("postal")} placeholder="Postal Code" defaultValue={user.postal} />
                    <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , padding:'10px', margin:'10px' }} type="Address" {...register("address", { min: 18, max: 99 })} placeholder="Type Your Address" />             


                <input style={{width:"300px", height:'50px', justifyContent:'center', alignItems:"center" , paddingTop:'10px', margin:'10px' }} type="submit" placeholder="submit" />
                    
            </form>
                  </Grid>  
                  <Grid  xs={12} md={6} >
                        <h1>Product Detail</h1>
                      <img style={{ justifyContent:'center', alignItems:"center" , paddingTop:'200px', margin:'10px' }} src={product?.img} alt="" />
                        <h1>{product?.name}</h1>
                        <p>  {product?.description}</p>     
                        <h4> Price: {product?.price}</h4>     
                  </Grid>  
                </Grid>

            </div>
        </div>
    );
};

export default Order;