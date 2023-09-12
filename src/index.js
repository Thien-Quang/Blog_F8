const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Use 'require' for importing

app.use(express.static(path.join(__dirname, "public")))


app.use(morgan('combined'));

// Configure Handlebars
app.engine('handlebars', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resources/views"));

// Define a route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
