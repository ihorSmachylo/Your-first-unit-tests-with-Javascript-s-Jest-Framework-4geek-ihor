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
// from Dollar to Yen 


const fromDollarToEuro = function (valueInDollar){
    let valueInEuro = Math.floor(valueInDollar / oneEuroIs.USD);
    return valueInEuro;
}
const fromDollartoYen = function(valueInDollar){
    let valueInYen = fromEuroToDollar(valueInDollar) * oneEuroIs.JPY;
    return valueInYen ;
}
//from Yen to Pound

const fromYentoEuro = function (valueInYen){
    let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
    return valueInEuro;
}
const fromYentoPound = function(valueInDollar){
    let valueInPound = fromYentoEuro(valueInDollar) * oneEuroIs.GBP;
    return valueInPound ;
}



module.exports={sum,fromDollartoYen,fromEuroToDollar,fromYentoPound};
