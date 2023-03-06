var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

/*import { copyFileSync, constants } from "node:fs";

// destination.txt will be created or overwritten by default.
copyFileSync("file1.txt", "destination.txt");
console.log("source.txt was copied to destination.txt");*/

//this works now because I added   "type": "module", to package.json
//if you don't add this, you will get an error
//SyntaxError: Cannot use import statement outside a module
//initially I was getting this error because I didn't have a package.json file
//so I ran npm init -y to create one

/*without package.json you can run the code with
const fs = require('fs');
fs.copyFileSync('file1.txt', 'destination.txt');
 */
