require('dotenv').config()

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//connect with database
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/rook-routes')

connectToDB();


// middleware
app.use(express.json());

//routes
app.use('/api/books', bookRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})