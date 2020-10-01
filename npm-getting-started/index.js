const myInformations = require('./information.js');

const cowsay = require('./node_modules/cowsay');
console.log(cowsay.say({
    text : `Hello I'm ${myInformations.name} from ${myInformations.campus} campus!`,
    e : "oO",
    T : "U"
}));
