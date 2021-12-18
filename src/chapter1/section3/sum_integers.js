const sum = require('./sum');

function identity(x) {
    return x;
}

function inc(x) {
    return x + 1;
}

function sumIntegers(a, b) {
    return sum(identity, a, inc, b);
}

module.exports = {sumIntegers};

