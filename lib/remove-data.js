const fs = require('fs');
const path = require('path');
var notes;

// re-writes json file with all objects in array
var writeFile = () => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 4))
}

// splices notes array where note id matches
var removeData = (note_id) => {
    notes = [];
    const readData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf-8');
    if(readData.length > 0) {
        var parsedData = JSON.parse(readData);
        parsedData.forEach(object => {
            if(object.id !== note_id){
                notes.push(object)
            }
        })
    } 
    writeFile();
}

module.exports = removeData;