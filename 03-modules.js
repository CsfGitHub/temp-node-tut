// CommonJS, cada ficheros es un modulo, poer defecto
// Modules - Codigo encapsulado (solo comporten lo mínimo)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavour')
require('./07-mind-grenade')

// console.log(names);
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
