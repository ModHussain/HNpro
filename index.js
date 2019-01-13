const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello News');
});

app.listen(port);
console.log('Running on port 3000...');
