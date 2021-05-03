// npm --version
//local dependency - usar en proyectos locales.
// npm i <packagename>


// global depency, s epodria user en cualquier proyecto
// npm install -g  <packagename>
// sudo npm install -g <packagename> (mac)


// package.jon - manifest file (guarda informacion ijmportante acercq del proyeco/package)'
// manual approach. create package.json, en el raiz,  crea propiedads, etc
// npm init (paso a paso, enter para skip
// npm init -y (todo por defecto))



const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems); 