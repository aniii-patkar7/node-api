const mongoose = require("mongoose");
const {response}=require('express');

mongoose .connect('mongodb+srv://patkaranirud:uRbJJsXvLTU0genS@aniruddhapatkar.raimdbm.mongodb.net/?retryWrites=true&w=majority',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
})
.then((response) => {
    console.log("connected to database");
})
.catch((error) => {
        console.log(error);
});


