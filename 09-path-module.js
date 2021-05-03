const path = require('path')
console.log(path.sep);

const filePath =  path.join('/content','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolut = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolut);

/*output
node app.js                                   ✔ 
/
/content/subfolder/test.txt
test.txt
/Users/clemente.sanchez/Documents/Devtools/node/node_course_js/content/subfolder/text.txt
*/