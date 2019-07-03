require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


const employeeController = require('./controllers/employeeController');



const app = express();

app.use(bodyparser.urlencoded ({
    extended: true
}));
app.use(bodyparser.json()); 

const port = 3000;




app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'hbs');


app.listen(port, () => console.log(`Example app listening on port !` + port));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/employee', employeeController);


