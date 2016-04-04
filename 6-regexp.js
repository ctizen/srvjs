function main() {
    var regexp = /^([\wа-яА-Я,]+\s?)*$/;
    var str = "Тарелочка чечевичного супа и один маленький, но очень хитрый сухарик:)";

    if (str.match(regexp)) {
        console.log('Success!');
    }
}

main();

