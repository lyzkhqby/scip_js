function sum(term, a, next, b) {
    if (a > b) {
        return 0;
    } else {
        return term(a) + sum(term, next(a), next, b);
    }
}

module.exports = sum;
