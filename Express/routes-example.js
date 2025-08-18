const express = require('express');

const app = express();

//route 

app.get('/', (req, res)=>{
    res.send('Welcome to home page')
});

//get all products
app.get('/products',(req, res)=>{
    const products = [
        {
            id: 1,
            value: 'p1'
        },
         {
            id: 2,
            value: 'p2'
        },
         {
            id: 3,
            value: 'p3'
        },
    ];
    res.json(products);
});

//get a single product

app.get('/products/:id',(req, res)=>{
    const productid = parseInt(req.params.id);
    const products = [
        {
            id: 1,
            value: 'p1'
        },
         {
            id: 2,
            value: 'p2'
        },
         {
            id: 3,
            value: 'p3'
        },
    ];

    const getSingleProduct = products.find(product=>product.id==productid);

    if(getSingleProduct){
        res.json(getSingleProduct)
    }else{
        res.status(404).send('Product not found try with new id')
    }
})


const port = 3000;
app.listen(port, ()=>{
    console.log('At 3000');
    
})