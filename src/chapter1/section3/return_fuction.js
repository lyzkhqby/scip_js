function averageDamp(f) {
    return (x) => (x + f(x)) / 2;
}
const dx = 0.00001;
function deriv(g) {
    return (x) => (g(x + dx) - g(x)) / dx;
}

module.exports = {averageDamp, deriv};
