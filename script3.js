
var prompt = require('prompt-sync')();

const age = prompt('Imput you age? ');
let isEmployed = prompt("Are you employed? Y / N")

function checkEligibility (age, isEmployed){
    let result ="return 'The person is eligible'"
    if (age > 18 && isEmployed=='Y'){
        result = result + " eligible"
    } else if (age > 18 && isEmployed=='N'){
        result = result + " conditionally eligible"
    } else if (age <= 18){
        result = result + " not eligible"
    }
}