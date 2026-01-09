const express = require('express');
const db = require('./routes/db'); 
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const indexRouter = require('./routes/index');
const backend = require('./routes/backend');
const login = require('./routes/login');

const app = express();
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to pass the database connection to every route
app.use((req, res, next) => {
  req.db = db; 
    next();
});

// Middleware to count visits





// Define a route to run index page automode on 
app.use('/',indexRouter);
app.use('/login',login );
app.use(express.urlencoded({ extended: true }));
app.use('/backend',backend );








// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



