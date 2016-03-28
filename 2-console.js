/* eslint-disable no-console */
/* eslint-disable no-debugger */

main();

function main() {
    hello();
}

function hello() {
    world();
}

function world() {
    try {
        throw new Error();
    } catch(e) {
        console.log(e.stack);
    }

    // console.trace();
}
