
var readlineSync = require('readline-sync');
var input = readlineSync.question('Ingresa un numero');

function fibonacci_sequence(n){ 
    let x = 0, y = 1, z
    for (let c = 1; c <= n; c+=1) {
        z = x + y
        x = y
        y = z
    }
    console.log("F(",n,"): ", x)
}

fibonacci_sequence(input)

//Run on Terminal "node fibonacci.js"