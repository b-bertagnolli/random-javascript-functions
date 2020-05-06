function onec(x) {

    let numbers = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let stringX = "";

    for (let i = 0; i < x; i++){
        stringX += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return stringX
}

function twoc(x) {
    let newString = "";
    for (let i = 0; i < x.length; i++){
        if (x.charCodeAt(i) > 96 && x.charCodeAt(i) < 123){
            newString += String.fromCharCode(x.charCodeAt(i) ^ (1 << 5));
        } else newString += x.charAt(i)
    }
    return newString
}

function threec(x, y) {

    let string = "";

    for (let i = 0; i <= y * 2; i++) {
        if (i < y) {
            string += " "
        }
        if (i === y) {
            string += x
        }
        if (i > y) {
            string += " "
        }
    }
    return string
}

function fourc(x, y) {

    let newString = "";

    if (y === "odd" || y === "Odd") {
        for (let i = 0; i < x.length; i++) {
            if (i % 2) {
                newString += x.charAt(i)
            } else if (x.charCodeAt(i) > 64 && x.charCodeAt(i) < 91 || x.charCodeAt(i) > 96 && x.charCodeAt(i) < 123){
                newString += String.fromCharCode(x.charCodeAt(i) ^ (1 << 5))  
            } else newString += x.charAt(i)
        }
        return newString
    } else if (y === "even" || y === "Even"){
        for (let i = 0; i < x.length; i++){
            if (i % 2){
                if (x.charCodeAt(i) > 64 && x.charCodeAt(i) < 91 || x.charCodeAt(i) > 96 && x.charCodeAt(i) < 123){
                    newString += String.fromCharCode(x.charCodeAt(i) ^ (1 << 5))
                } else newString += x.charAt(i)
            } else newString += x.charAt(i)
        }
    } return newString
}

function fivec(x) {

    let newString = "";

    for (let i = x.length - 1; i >= 0; i--){
        newString += x.charAt(i)
    }
    return newString
}

function sixc(x, y) {

    let newString = "";

    if (x.length >= y.length){
        for (let i = 0; i < x.length; i++){
            newString += x.charAt(i);
            if (y.charAt(i) !== undefined) {
                newString += y.charAt(i)
            }
        }
    } else {
        for (let i = 0; i < y.length; i++){
            if (x.charAt(i) !== undefined){
                newString += x.charAt(i);
            }
            newString += y.charAt(i)
        }
    }
    return newString
}

function sevenc(x) {
    let newString = "";
    let i = 0;

    while (x.charCodeAt(i) < 33){
        i++
    }
    for (let h = i; h < x.length; h++){
        newString += x.charAt(i);
        i++
    }
    return newString
}

function eightc(x) {

    let newString = "";
    let i = 0;
    let z = x.length - 1;

    while (x.charCodeAt(i) < 33){
        i++
    }
    while (x.charCodeAt(z) < 33){
        z--
    }
    for (let h = 0; h < x.length; h++){
        if (h >= i && h <= z){
            newString += x.charAt(h);
        }
    }
    return newString
}

function ninec(x, y) {
    let newArray = [];
    let yArray = 0;

    for (let i = 0; i < x.length; i++){
        newArray[i] = x[i];
        yArray++
    }
    for (let i = 0; i < y.length; i++){
        newArray[yArray] = y[i];
        yArray++
    }
    return newArray
}

function tenc(x, y) {
    let TorF = false;

    for (let i = 0; i < x.length; i++){
        if (x[i] >= y){
            TorF = true;
        }
    }
    return TorF

}