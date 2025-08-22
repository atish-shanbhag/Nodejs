const Book = require('../models/book')

const getAllBooks = async (req, res) => {

    try{
        const allBooks = await Book.find({});
        if(allBooks?.length >0){
            res.status(200).json({
                message: 'Successfully fetched books',
                success: true,
                data: allBooks
            })
        }else{
            res.status(404).json({
                success: false,
                message: 'No Books found in collection'
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal error occured'
        })
    }



}

const getSingleBookById = async (req, res) => {

    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsByID = await Book.findById(getCurrentBookId);

        if (!bookDetailsByID) {
            res.status(404).json({
                success: false,
                message: 'Book Id not found please send some different id'
            })
        }
        res.status(200).json({
            success: true,
            data: bookDetailsByID
        });


    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal error occured'
        })
    }


}


const addNewBook = async (req, res) => {
    try{

        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);

        if(newlyCreatedBook){
            res.status(201).json({
                success: true,
                message: 'Book Added Successfully',
                data: newlyCreatedBook
            })
        }

    }catch(err){
        console.log(err);
          res.status(500).json({
            success: false,
            message: 'Internal error occured'
        })
    }

    
}


const updateBook = async (req, res) => {  
}


const deleteBook = async (req, res) => { 
}

module.exports = {
    getAllBooks,
    getSingleBookById,
    addNewBook,
    updateBook,
    deleteBook
}