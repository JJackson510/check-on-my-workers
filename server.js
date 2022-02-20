const express = require('express');
const db = require('./db/connection');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req,res) => {
    res.status(404).end();
}) ;

db.connect(err => {
    if(err) throw err;
    console.log('Database connected.');

    app.listen( port, ()=> {
        console.log(`Server is running on ${port}`);
    })
});