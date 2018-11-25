const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();

//Map Global promise - get rid of warning
mongoose.Promise = global.Promise;
//Connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev',{
    // useMongoClient: true
})
.then(() => console.log('MongoDB Connected ...'))
.catch(err =>console.log(err));

//Handlebar Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Index Route
app.get('/',(req, res) =>{
    const title = 'Welcome_1';
    res.render('index',{
        title: title
    });
})

//About Route
app.get('/about',(req, res) =>{
    res.render('about');
})
const port = 5000;
 app.listen(port, () => {
     console.log(`Server starter on port ${port}`);
 })