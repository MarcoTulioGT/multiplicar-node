const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//let base = '2';
//console.log(module);
//console.log(process.argv);
//console.log(multiplicar);
//let argv2 = process.argv;
console.log('Base', argv.base);

//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log('crear: ' + argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}