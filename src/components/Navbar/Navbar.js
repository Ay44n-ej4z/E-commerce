import React from 'react'
import { Badge, IconButton, Toolbar, Typography } from 'material-ui-core'
import { ShoppingCart } from '@material-ui/icons'
import { AppBar } from '@material-ui/core'
import useStyles from "./style"

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <AppBar position = "fixed" className = {classes.appBar} color = "inherit" >
            <Toolbar>

                <Typography variant = "h6" className = {classes.title} color = "inherit" >
                    <img src = 'http://www.bugtreat.com/blog/wp-content/uploads/2014/06/eCommerce-Logo.png' alt = "" height= "25px" className= {classes.image} />
                    <Typography variant = "body2" gutterBottom color = 'textPrimary' >                  
                    Click-K4rt
                    </Typography>
                </Typography>
                    <div className = {classes.grow} /> 
                    <div className = {classes.button}>
                        <IconButton aria-label = "show-cart-items" color = 'inherit'>
                            <Badge badgeContent = {2} color = "secondary">
                                <ShoppingCart /> 
                            </Badge>
                        </IconButton>
                    </div>
            </Toolbar>
        </AppBar>            

        </>
    )
}

export default Navbar
