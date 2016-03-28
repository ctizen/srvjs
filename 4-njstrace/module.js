/* eslint-disable no-console */
/* eslint-disable no-debugger */

(function main() {
    var inputNumber = parseInt(process.argv[2], 10);

    if (!inputNumber) {
        console.log('Some shit has happened!');
        return;
    }

    getNumberSqrt(inputNumber, function(err, result) {
        if (err) {
            console.error('Dafuq?', err);
            return;
        }
        console.log(result);
    });
})();

function checkNumberIsPositive(num) {
    console.log('checking positiveness...');
    return num > 0;
}

function getNumberSqrt(num, cb) {
    if (!checkNumberIsPositive(num)) {
        debugger;
        cb(new Error('Number is not positive'));
        return;
    }

    console.log('Great! Proceeding...');

    setTimeout(function() {
        var sqrt = Math.sqrt(num);
        if (sqrt - parseInt(sqrt, 10) < 0.0001) {
            console.log('Wow, so square!');
        }

        cb(null, sqrt);
    }, 1000);

}
