import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles'



const Products=({products, onAddToCart}) =>{
    const classes= useStyles();
    return(<main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent='center' spacing={4}>
            {products.map((product)=>(
                
                <Grid item key= {product.id} xs={6} sm={4} ms={3} lg={3} style={{  minWidth:"fit-content;"}}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>

            ))}

        </Grid>
    </main>);
    
}
export default Products