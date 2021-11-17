const express = require('express')
const path = require('path')
const app = express();
const PORT = 8008;

const db = require('./db/db.json')

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
}) 

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})


app.listen(PORT, () => {
    console.log(`you can just say listening on port and then do a $ no literally do a dollar sign no go back matthew heheheheheheheheheehe okay literally do a dollar sign do a dollar sign then port ${PORT}}`)
})