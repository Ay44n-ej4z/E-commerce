import { Grid } from 'material-ui-core'
import React from 'react'
import Product from './Product/Product'
import useStyles from './style'


export const Products = ({ products }) => {
    const classes = useStyles();
    return (
        <main className = {classes.content} >
            <div className = {classes.toolbar}>
            <Grid style = {{display: 'flex', alignItems: 'center', flexDirection: 'row',}}>
                {products.map((product)=> (
                    <Grid style = {{display: 'flex', alignItems: 'center', flexDirection: 'row',  padding: '20px'}} key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                        <Product product = {product} />
                    </Grid>
                ))}
            </Grid>     
            </div>       
        </main>
    )
}
