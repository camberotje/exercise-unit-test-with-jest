
test("1 euro deberia ser 1.07 Dollar", () => {

    const { fromEuroToDollar } = require ('./app.js');

    expect(fromEuroToDollar(1)).toBe(1.07);
})

test("1 dolar deberia ser 156.39 yenes", () => {

    const { fromDollarToYen } = require ('./app.js');

    expect(fromDollarToYen(1)).toBe(156.39);
})

test("1 yen deberia ser 0.0052 pound", () => {

    const {fromYenToPound } = require ('./app.js');

    expect(fromYenToPound(1)).toBe(0.0052);
})

