function positive(x) {
    return x > 0;
}

function negative(x) {
    return x < 0;
}

function search(f, neg_point, pos_point) {

    function close_enough(x, y) {
        return Math.abs(x - y) < 0.001;
    }

    function average(x, y) {
        return (x + y) / 2;
    }


    let mid_point = average(neg_point, pos_point);
    if (close_enough(neg_point, pos_point)) {
        return mid_point;
    } else {
        let test_value = f(mid_point);
        if (positive(test_value)) {
            return search(f, neg_point, mid_point);
        } else if (negative(test_value)) {
            return search(f, mid_point, pos_point);
        } else {
            return mid_point;
        }
    }
}

function half_interval_method(f, a, b) {
    let a_value = f(a);
    let b_value = f(b);
    if (negative(a_value) && positive(b_value)) {
        return search(f, a, b);
    } else if (negative(b_value) && positive(a_value)) {
        return search(f, b, a);
    } else {
        console.log('Values are not of opposite sign', a, b);
    }
}

module.exports = {
    half_interval_method
};
