const express = require('express');

const app = express();
const path = require('path');
const { title } = require('process');

//set view engine as ejs
app.set('view engine', 'ejs')

//set directory for view
app.set('views', path.join(__dirname, 'views'));


const products = [
        {
            id: 1,
            title: 'p1'
        },
         {
            id: 2,
            title: 'p2'
        },
         {
            id: 3,
            title: 'p3'
        },
    ];


app.get('/',(req, res)=>{
    res.render('home', {title: 'Home', products: products})
});

app.get('/about',(req, res)=>{
    res.render('about', {title: 'About'})
})


const port = 3000;
app.listen(port, ()=>{
    console.log('At 3000');
    
})