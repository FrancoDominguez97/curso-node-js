const fs = require('fs'); // requerir la base de datos del proyecto.
require('colors');
const createFile = async( base = 5, listar= false, hasta = 10) => {
    try {
        console.clear();
    
        let salida = '';
        let consola = '';

        for ( let i = 0; i<=hasta; i++){
         salida += `${ base } x ${ i } = ${ base * i}\n`;
         consola += `${ base } ${ 'x'.magenta } ${ i } ${'='.magenta} ${ base * i}\n`;
        }
        if(listar){
            console.log(`========================`.white);
            console.log(`       TABLA DEL ${base}`.cyan);
            console.log(`========================`.white);
            console.log(consola);
        }

        fs.writeFileSync( `./out/tabla-${base}.txt`, salida);

       return `tabla-del-${base}.txt creado`; 
    } catch (error) {
        throw error;
    }
    
}

module.exports = {
    createFile
}