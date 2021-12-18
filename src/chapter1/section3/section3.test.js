const {sumIntegers} = require('./sum_integers')
const {pi_sum, pi_sum_lambda} = require("./sum_pi");
const {f, f_lambda} = require("./let_variable");
const {half_interval_method} = require("./equation");
const fixedPoint = require("./fixed_point");
const averageDamp = require("./return_fuction");
const {deriv} = require("./return_fuction");


describe('sum', () => {
    test('sum 1 to 100', () => {
        const result = sumIntegers(1, 100);
        expect(result).toBe(5050);
    })

    test('pi sum 1 to 1000', () => {
        const result = pi_sum(1, 1000);
        expect(result).toBeCloseTo(3.141592653589793 / 8, 2);
    })

    test('lambda pi sum 1 to 1000', () => {
        const result = pi_sum(1, 1000);
        const result_lambda = pi_sum_lambda(1, 1000);
        expect(result).toBe(result_lambda);
    })
})

describe('let use', () => {
    test('f', () => {
        const result = f(1, 2);
        expect(result).toBe(4);
    })

    test('f_lamda', () => {
        const result = f_lambda(1, 2);
        expect(result).toBe(4);
    })
})

describe('equation', () => {
    test('half interval method', () => {
       const result1 = half_interval_method(Math.sin, 2.0, 4.0);
       expect(result1).toBe(3.14111328125);
       const result2 = half_interval_method((x) => {return (x * x * x) - (2 * x) - 3}, 1.0, 2.0);
       expect(result2).toBe(1.89306640625);
    });
})

describe('fixed-point', () => {
    test('fixed-point of cos', () => {
        const result = fixedPoint(Math.cos, 1.0);
        expect(result).toBeCloseTo(0.7390822);
    })
    test('fixed-point of sin + cos', () => {
        const result = fixedPoint((x) => Math.sin(x) + Math.cos(x), 1.0);
        expect(result).toBeCloseTo(1.258731);
    })
})

describe('return fuction', () => {
    test('average-damp', () => {
        const result = averageDamp((x) => x * x)(10);
        expect(result).toBe(55);
    });
    test ('deriv', () => {
        function cube(x) {
            return x * x * x;
        }

        const result = (deriv(cube))(5);
        expect(result).toBe(75.00014999664018);
    })
})
