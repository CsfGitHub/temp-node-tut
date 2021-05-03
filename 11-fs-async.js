const {readFile,writeFile} =  require('fs');
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result_async.txt',`Here is the result ${first}, ${second}`,(err,result) =>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');

/* Habria que mejorar con promises o await sync, pero es la idea, liberar tareas y atender más peticiones.

~/Documents/Devtools/node/node_course_js  node 11-fs-async.js                                                                                                        ✔ 
start
starting next task
done with this task
*/