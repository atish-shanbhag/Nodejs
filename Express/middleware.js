const express = require('express');
const app = express();

const myFirstMiddleWare = (req, res, next)=>{
    console.log('This first middleware will run on every request');
    next();
    
}


app.use(myFirstMiddleWare);

app.get('/',(req, res)=>{
    res.send('Home page');
});

app.get('/about',(req, res)=>{
    res.send('About page');
})


app.listen(3000, ()=>{
    console.log('At 3000');
    
})