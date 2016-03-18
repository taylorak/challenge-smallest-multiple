/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
    var temp = 1;
    for(var i = 2; i <= ceiling; i++) {
        temp = lcm(temp, i)
    }
    return temp;
};


function gcd(a, b) {
    while(b !== 0) {
        var tempa = a;
        a = b;
        b = tempa % b;
    }
    return a;
}

function lcm(a, b) {
    return a / gcd(a, b) * b
}

