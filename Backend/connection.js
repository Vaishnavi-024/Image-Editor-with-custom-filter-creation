const mongoose = require('mongoose');

const dbName = "wss2000";
const url = `mongodb+srv://Vaishnavi:Vaish024@cluster0.q2vdjlw.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// Asynchronous Fuction - returns promise 
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);    
});

module.exports = mongoose;