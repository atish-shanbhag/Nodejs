const express = require('express');
const app = express();

// middleware
app.use(express.json())

let books = [
    {
        id: '1',
        title: 'Book 1'
    },
    {
        id: '2',
        title: 'Book 2'
    }
];

// get all books


app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to book store api'
    })
});

//get all books
app.get('/getBooks', (req, res)=>[
    res.json(books)
]);

app.get('/getBooks/:id', (req, res)=>{
    const getBookId = parseInt(req.params.id);

    const getSingleBook = books.find(book=>book.id == getBookId);

    if(getSingleBook){
        res.status(200).json(getSingleBook)
    }else{
        res.status(404).json({
            message: 'Book Not Found'
        })
    }
});

//add new book

app.post('/addBook', (req, res)=>{
    console.log('LINE 49', books.length);
    
    const newBook = {
        id: Math.floor(Math.random() * 1000).toString(),
        title: `Book ${Math.floor(Math.random() * 1000).toString()}`
    }
    books.push(newBook);
    res.status(200).json({
        message: 'Book Added Successfully',
        book: newBook
    })
});

//update a book

app.put('/update/:id', (req, res) => {-
        console.log("Params:", req.params.id);

    const findCurrentBook = books.find(bookItem => bookItem.id === req.params.id);
    console.log(findCurrentBook);
       console.log("Found:", findCurrentBook);
 

    if (findCurrentBook) {
        findCurrentBook.title = req.body.title || findCurrentBook.title;
        res.status(200).json(books)
    } else {
        res.status(404).json({
            message: 'Id Not Found'
        })
    }
})


app.delete('/delete/:id', (req, res) =>{
    const findCurrentIndexOfBook = books.findIndex(item => item.id == req.params.id);

    if(findCurrentIndexOfBook){
        const deletedBook = books.splice(findCurrentIndexOfBook, 1);
        res.status(200).json({
            message: 'Book delete Successfully',
            data: deletedBook[0]
        })
    }else{
        res.status(404).json({
            message: 'Id not found'
        })
    }
})


const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
    
})