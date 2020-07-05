const fs = require('fs');
const { rejects } = require('assert');
const color = require('colors');



let listarTabla = (base, limite) => {



    console.log('==================='.green);
    console.log(`=== Tabla del ${base} ===`.green);

    console.log('==================='.green);



    for (let index = 0; index <= limite; index++) {
        //const element = array[index];
        console.log(`${base} * ${index} = ${base*index}\n`);
    }




}




let crearArchivo = (base, limite) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor ${base} no es un numero`);
            return;


        }

        let data = '';



        for (let index = 0; index <= limite; index++) {
            //const element = array[index];
            data += (`${base} * ${index} = ${base*index}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) return reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });


    });

}

module.exports = {
    crearArchivo,
    listarTabla,
}