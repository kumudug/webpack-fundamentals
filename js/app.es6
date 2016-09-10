//require('./login'); //commonjs syntax
import {login} from "./login" //es6 syntax
login('admin', 'wrongpwd');

document.write("Webpack fundementals app !!!");

console.log('App loaded');

//webpack ./app.js bundle.js to build the bundle.js