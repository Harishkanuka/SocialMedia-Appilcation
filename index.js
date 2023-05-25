const express = require('express');

const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose');

app.use(express.static('./assets'));
// Use express-ejs-layouts (this must be done before routes)
app.use(expressLayouts);

//Extract styles and Scripts from sub pages into layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//Use express router
app.use('/', require('./routes'));

//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function (err) {
	if (err) {
		console.log(`Error in connecting to server: ${err}`); //This way of coding is known as interpollation
	}
	console.log(`Connected to server successfully: ${port}`);
});
