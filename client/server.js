const express = require('express'); 
const axios = require('axios');
const app = express(); 
var cors = require('cors');
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.static('public'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('public'));
    app.get('*', (req,res) => {
        req.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })

}

app.listen(port, () => console.log(`listening skr skr on port ${port}!`));