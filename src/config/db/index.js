const mongoose = require('mongoose');

async function connect(){
    try{
    await mongoose.connect('mongodb://localhost/f8_education_dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    })
    console.log('Connect successfully')
    } catch (error){
        console.log('Connect falure')
    }

}

module.exports = {connect}