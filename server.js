const express = require('express');
const routes = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 8008;

app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
    console.log(`you can just say listening on port and then do a $ yeah literally do a dollar sign no go back hahahaha okay literally do a dollar sign do a dollar sign then port ${PORT}`)
})



