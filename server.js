const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const api = require('./routes/api-routes.js');
const view = require('./routes/html-routes.js');
app.use(view);
app.use(api);
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}!`);
});