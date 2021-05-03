// Globals, no hay window
//se pueden acceder en cualquier parte de la aplicación.

//Algunos ejemplos, hay mucho mas

// __dirname - path al directorio actual
// __filename   -   file name
// require      -  function para usar modulos (CommonJs)
// module       -   info about current module (file)
// process      -   info about env donde se está ejecutando el proceso

//console.log(__dirname);
//console.log(module);
//console.log(process);
setInterval(()=>{
    console.log('hello world');
},1000)