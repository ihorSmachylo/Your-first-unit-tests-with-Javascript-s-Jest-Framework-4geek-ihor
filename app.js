console.log("Hello World");
function sum (a,b){
    return a+b
}
console.log(sum(7,3));


// module.exports = {sum};
// Coloca el siguiente código al comienzo de tu app.js:



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}



// FROM DOLLAR TO YEN
const fromDollarToYen = function(valueInDollar){
    let valueInYen = ((1/oneEuroIs.USD)*oneEuroIs.JPY)*valueInDollar
    return valueInYen
}


const fromYenToPound = function(valueInYen){
    let valueInPound = ((1/oneEuroIs.JPY)*oneEuroIs.GBP)*valueInYen
    return valueInPound
}


module.exports={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};
