import React from 'react';
import { InputLabel,Select, MenuItem,Button,Grid,Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';

const AddressForm = ({checkoutToken,next}) => {

    const methods=useForm();


    return (
        <>
               <Typography variant="h6" gutterBottom>Shipping Address</Typography>
               <FormProvider {...methods} >
                   <form onSubmit={methods.handleSubmit((data)=> next({...data}))}>
                        <Grid container spacing={3}>
                            <FormInput required name ='firstName' label="First Name"/>
                            <FormInput required name ='lastname' label="Last Name"/>
                            <FormInput required name ='address1' label="Addresss"/>
                            <FormInput required name ='email' label="Email"/>
                            <FormInput required name ='city' label="City"/>
                            <FormInput required name ='ZIP' label="Pincode"/>
                      
                            
                        </Grid>
                        <br/>
                        <div style={{display:"flex", justifyContent:'space-between'}}>
                            <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                            <Button type="submit" variant="contained">Next</Button>
                        </div>
                   </form>
               </FormProvider>
        </>
    )
}

export default AddressForm
