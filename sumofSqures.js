


function SAHJAH(inputNumber, power) {

    var n = 0;
    var f = 0
    var t = []
    while (f != inputNumber || n < Math.pow(inputNumber, 1 / n)) {
        f = (n * (n - 1)) / 2
        n++;
        if (f == inputNumber) {
            return true;
        }
        else {
            return false
        }
    }
}

console.log(SAHJAH(123, 2))


function atifButify(a, k) {

    for (var i in a) {
        if (!find(a, i + k) || !find(a, i - k)) {
            return false;
        }
    }
    return true;
}

function find(a, num) {
    for (var d in a) {
        if (num == d) {
            return true
        }
    }
    return false;
}




