/* eslint-disable no-console */
/* eslint-disable no-debugger */

(function main() {
    var inputNumber = parseInt(process.argv[2], 10);

    if (!inputNumber) {
        console.log('Some shit has happened!');
        return;
    }
    try {
        console.log(getNumberSqrt(inputNumber));
    } catch (e) {
        console.error('Dafuq?', e);
    }
})();

function checkNumberIsPositive(num) {
    console.log('checking positiveness...');
    return num > 0;
}

function getNumberSqrt(num) {
    if (!checkNumberIsPositive(num)) {
        debugger;
        throw new Error('Number is not positive');
    }

    console.log('Great! Proceeding...');

    var sqrt = Math.sqrt(num);
    if (sqrt - parseInt(sqrt, 10) < 0.0001) {
        console.log('Wow, so square!');
    }

    return sqrt;
}
