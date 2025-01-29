function fromEuroToDollar (euros){

    let dollar = 1.07
    return euros * dollar 

}

function fromDollarToYen (dollar){

    let yen = 156.39
    return dollar * yen
}

function fromYenToPound (yen){

    let pound = 0.0052
    return yen * pound
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }