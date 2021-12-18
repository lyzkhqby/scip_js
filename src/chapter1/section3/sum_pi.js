const sum = require("./sum");

function pi_sum(a, b) {

    function pi_term(x) {
        return 1.0 / (x * (x + 2));
    }

    function pi_next(x) {
        return x + 4;
    }

    return sum(pi_term, a, pi_next, b);
}

function pi_sum_lambda(a, b) {
    return sum(
        (x) => (1.0 / (x * (x + 2))),
            a,
            (x) => (x + 4),
            b
    );
}

module.exports = {pi_sum, pi_sum_lambda};
