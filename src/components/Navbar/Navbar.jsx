import React from 'react'
import { AppBar,Toolbar, IconButton, Badge, MenuItem, Menu ,Typography } from '@material-ui/core'
import {  ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';
import { Link,useLocation } from 'react-router-dom';


const Navbar = ({totalItems}) => {

    const classes= useStyles();
    const location= useLocation();

   
    return (
        <>
            <AppBar position= "fixed" className="appBar" color="inherit">
            <Toolbar>
            <Typography component={Link} to="/" variant="h6" className="classes.title" color="inherit" style={{ textDecoration: 'none' }} >
        
                <img src="https://static.wixstatic.com/media/214a7b_132c8e32c17b4bfb84b7a6e6bcc703c0~mv2.png" alt="Logo" height="25 px" className={classes.image}/>
                Espangle
            </Typography>
            <div className= {classes.grow}/>
          {location.pathname==='/' && (
            <div className={classes.button}>
                <IconButton component={Link} to="/cart"aria-label="Show Cart Items" color="inherit" >
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </div>
            )}
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
