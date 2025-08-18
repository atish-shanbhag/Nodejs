const express = require('express');
const app = express();


const requestTimeStampLogger = (req, res, next)=>{
    const timestamp = new Date().toISOString();

    console.log(`${timestamp} middleware is called from ${req.method} to ${req.url}`);
    
}
app.use(requestTimeStampLogger);

app.get('/',(req, res)=>{
    res.send('Home page');
});

app.get('/about',(req, res)=>{
    res.send('About page');
})


app.listen(3000, ()=>{
    console.log('At 3000');
    
})