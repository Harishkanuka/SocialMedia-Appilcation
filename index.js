const express = require('express');

const app = express();
const port = 8000;

app.listen(port, function (err) {
	if (err) {
		console.log(`Error in connecting to server: ${err}`); //This way of coding is known as interpollation
	}
	console.log(`Connected to server successfully: ${port}`);
});
