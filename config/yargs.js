const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla que vamos a multiplicar'                  
                })
                .check ( (argv, option) =>{
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Es para mostrar los resultados de la tabla'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Limite hasta donde hacer la multiplicacion'
                })
                .argv;

module.exports = argv;