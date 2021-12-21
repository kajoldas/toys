import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
          axios.post('https://fathomless-springs-03872.herokuapp.com/products', data )
          .then(res => {
              console.log(res)
              if(res.data.insertedId){
                  alert('Product Added Successfully')
                  reset();
              }
          })
      };
    return (
        <div>
            <div className="product">
            <h1>Add Product </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Title" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price"  />
                <input {...register("img")} placeholder="Image URL" />
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;