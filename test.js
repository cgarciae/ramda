/**
 * Created by Cristian Garcia on 7/5/2014.
 */

var R = ramda;

function sumArgs () {
    return R.sum (arguments);
}

function nest (n, f) {
    var i = 0;
        g = f;
    while (++i < n) {
        g = R.compose (f, g);
    }
    return g;
}

function vCurry (n, f) {
    return n == 1 ? f : nest (n-1, R.partially)(f);
}

var curriedSumArgs = vCurry (3, sumArgs);
var sum6 = curriedSumArgs (1, 2, 3);
var ten = sum6 (2, 2); //sumArgs (1, 2, 3, 2, 2)