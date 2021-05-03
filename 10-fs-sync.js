//Misma forma de o
//const {readFileSync} =  requier('fs');
//const fss = require ('fs');

// desttucturing, inicializar al metodo directamente si sabemos cojmo se llama, misma propiedad

const {readFileSync,writeFileSync} =  require('fs');
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//si no existe el fichero, node los sobreescribirá
// el tercer arametro, flag: para opciones: a para añadir
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag: 'a'})
console.log('done with this task');
console.log('starting with next task');
