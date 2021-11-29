const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const removeData = require('../../lib/remove-data');
const createID = require('../../lib/create-id');
const addData = require('../../lib/data-array');



// -------- get request to view existing note when clicked on --------
router.get('/', (req,res) => {
    // responds with fetched data
    const readData = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf-8',)
    res.json(JSON.parse(readData));
})



// -------- post request to create new note upon clicking save button --------
router.post('/', (req,res) => {
    const {title, text} = req.body;

    const note = {
        id: `${createID()}`,
        title,
        text,
    };
    // uses the addData function and passes through inputted note as an object
    addData(note)
    // responds with new note
    res.json(note);
})



// -------- delete request to delete note when button is clicked --------
router.delete('/:id', (req,res) => {
    // uses the removeData fuction and passes through id
    removeData(`${req.params.id}`)
    // responds with updated data
    const readData = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf-8',)
    res.json(JSON.parse(readData));
})



module.exports = router;