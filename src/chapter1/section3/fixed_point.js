const tolerance = 0.0001;
function fixedPoint(f, firstGuess) {

    function closeEnough(v1, v2) {
       return Math.abs(v1 - v2) < tolerance;
    }

    function tryGuess(guess) {
        let next = f(guess);
        if (closeEnough(guess, next)) {
            return next;
        } else {
            return tryGuess(next);
        }
    }
    return tryGuess(firstGuess);
}
module.exports = fixedPoint;
