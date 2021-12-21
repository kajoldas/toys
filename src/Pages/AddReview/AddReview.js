import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [value, setValue] = React.useState(2);

  const onSubmit = data => {
      console.log(data)
        axios.post('https://fathomless-springs-03872.herokuapp.com/reviews', data )
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert(' Your Review Added')
                reset();
            }
        })
    };
    return (
        <div className="product">
            <h1>Add Review </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name",  { required: true })} placeholder="Your Name" />
                <textarea {...register("comment",  { required: true })} placeholder="Write Your Review Here" />
                <input type="number" {...register("rating" , { min: 1, max: 5},  { required: true })} placeholder="Give Ratings from 1-5"  />
                {/* material ui rating for dynamic purpuse */}
                {/* <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    /> */}
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;