const express = require('express');
const app = express();


// Sending the response as a hello world

app.get('/', function (req, res){
	res.send('Hello World!')
})

// Providing the port running for node
app.listen(3000, () => console.log('Example app listening on port 3000!'))