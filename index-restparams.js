function process(a, b, c, ...remainingArgs) {
    console.log(a + ', ' + b + ', ');
    console.log(remainingArgs);
}

let values = [10, 20, 30, 40, 50, 60];

process(...values);