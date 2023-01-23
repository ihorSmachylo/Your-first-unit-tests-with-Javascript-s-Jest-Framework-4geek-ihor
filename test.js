const { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum (14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test ('pasamos 2 valores 7 + 3 nos dara de resultao 10', function (){
    let total1 = sum(7,3);
    //EL resultado esperado de la suma es 10
    expect(total1).toBe(10);
})

test("pasamos 3.5€ y nos deberia retornar 4.2$", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("pasamos 1€ y nos deberia retornar 1.2$", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("pasamos 1.2 dollar y lo convertimos en yen y  ", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1.2)).toBe(127.9); //1.2 dollares son 127.9 yenes, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})



test("pasamos 127.9 yen y lo convertimos en 0.8 pounds  ", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(127.9)).toBe(0.8); // 1 euro es = 127.9 yen y la conversion a pound son 0.8 pounds

})