const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://atishshanbhag03:atishshanbhag@cluster0.jwrspe5.mongodb.net/"
).then(()=>console.log('Database connected successfully'))
.catch((e)=>console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now() }
});

//create user model

const User = mongoose.model('User', userSchema);

async function runQueryExamples(){
    try{
        // create a new document
    //     const newUser = await User.create({
    //         name: 'deleted User',
    //         email: 'deleted@gmail.com',
    //         age: '27',
    //         isActive: true,
    //         tags: ['Developer']
    //     })


    // console.log('Created new User', newUser);

    // const allUser = await User.find({});
    // console.log(allUser);

    // const getUsersOfActiveFalse = await User.find({isActive: true});
    // console.log(getUsersOfActiveFalse);
    

    // const getSingleUser = await User.findOne({name: 'Pramoda G'});
    // console.log(getSingleUser);

    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId);
    
    
    // const getUserById = await User.findById('68a532f330754c4e68871daa');
    // console.log(getUserById);

    // const selectedFields = await User.find().select('name email -_id');
    // console.log(selectedFields);

    // const limitedUser = await User.find().limit(5).skip(1);
    // console.log(limitedUser);
    
    // const sortedUsers = await User.find().sort({age: -1})
    // console.log(sortedUsers);

    // const countDocuments = await User.countDocuments({isActive: true})
    // console.log(countDocuments);

    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log(deletedUser);

    // const updatedUser = await User.findByIdAndUpdate(newUser._id, {
    //     $set : {age: 100, name: 'Vishal'}, $push: {tags: 'updated'}
    // }, {new: true});

    // console.log(updatedUser);
    
    
    
    
    

    }catch(er){
        console.log(er);
        
    } finally {
        await mongoose.connection.close()
    }
}

runQueryExamples()