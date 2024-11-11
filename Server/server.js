const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/moongodb');  

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


connectDB();


app.get('/', (req, res) =>{
    res.send('API is running');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});