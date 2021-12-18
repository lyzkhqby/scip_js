function f(x, y) {
    function f_helper(a, b) {
        return (x * a * a) + (y * b) + (a * b);
    }
    return f_helper(1 + x * y, 1 - y);
}

function f_lambda(x, y) {
    return ((a, b) => {
        return (x * a * a) + (y * b) + (a * b);
    })(1 + x * y, 1 - y);

}

module.exports = {f, f_lambda}
