const express = require('express'); 
const axios = require('axios');
const app = express(); 
var cors = require('cors');
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.static('build'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static('public'));
    app.get('*', (req,res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
    // app.get("/fruits", async (req, res) => {
    //     try {
    //         const response = await axios.get("https://www.fruityvice.com/api/fruit/all")
    //         res.json(response.data)
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    //   })
}

app.listen(port, () => console.log(`listening skr skr on port ${port}!`));