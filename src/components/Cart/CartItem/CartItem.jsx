import React from 'react';
import { Typography, Button, Card, CardActions, CardContent,CardMedia, MenuItem  } from '@material-ui/core';
import useStyles from  './styles'


const CartItem = ({item, onUpdateCartQuantity,onRemoveFromCart}) => {

    const classes= useStyles();
    
    
    
    
    return (
        <Card >
            <CardMedia image= {item.image.url} alt={item.name} className={classes.media}/>
<CardContent className={classes.cardContent}>
    <Typography variant="h4">{item.name}</Typography>
    <Typography variant ="h4" >{item.line_total.formatted_with_symbol}</Typography>
</CardContent>
<CardActions className={classes.cardActions} >
<div className={classes.buttons}>
<Button type="button"  size= "small" onClick={()=> onUpdateCartQuantity(item.id, item.quantity -1)}>-</Button>
<Typography size="small">{item.quantity}</Typography>
<Button type="button"  size= "small" onClick={()=> onUpdateCartQuantity(item.id, item.quantity +1)}>+</Button>
</div>
<Button variant="outlined" type="button"  onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
</CardActions>
           
        </Card>
    )
}

export default CartItem
