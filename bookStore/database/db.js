const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://atishshanbhag03:atishshanbhag@cluster0.pmedemq.mongodb.net/');
        console.log('Connected successfully');

    } catch (err) {
        console.log('Mongodb connection failed', err);
        process.exit(1);
    }
}

module.exports = connectToDB;