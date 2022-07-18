const { createFile} = require('./helpers/table');
require('colors');
const argv = require('./config/yargs');


createFile(argv.b, argv.l, argv.h)
    .then (fileName => console.log(fileName.green))
    .catch (err => console.log(err.red));