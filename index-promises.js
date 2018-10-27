// Understanding Promises

const DEFAULT_TIMEOUT = 3000;

function doHeavyWork(inputA) {
    let promise = new Promise(
        (resolve, reject) => {
            if (!inputA && inputA < 100) {
                reject({
                    reason: 'Invalid Argument(s) Specified!'
                });

                return;
            }

            setTimeout(() => {
                let result = inputA * inputA;

                resolve({
                    data: result
                });
            }, DEFAULT_TIMEOUT);
        });

    return promise;
}

function doHeavyWork2(inputA) {
    let promise = new Promise(
        (resolve, reject) => {
            if (!inputA && inputA < 100) {
                reject({
                    reason: 'Invalid Argument(s) Specified!'
                });

                return;
            }

            setTimeout(() => {
                let result = inputA + inputA;

                resolve({
                    data: result
                });
            }, DEFAULT_TIMEOUT);
        });

    return promise;
}

let heavyWorkPromise = doHeavyWork(200);

heavyWorkPromise
    .then(
        result => console.log(`Successfully Heavy Work Completed ... ${JSON.stringify(result)}`),
        error => console.log(`Error Occurred in Heavy Work ... ${error.message}`));

let heavyWorkPromise2 = doHeavyWork2(400);

heavyWorkPromise2
    .then(
        result => console.log(`Successfully Heavy Work 2 Completed ... ${JSON.stringify(result)}`),
        error => console.log(`Error Occurred in Heavy Work 2 ... ${error.message}`));

Promise
    .all([heavyWorkPromise2, heavyWorkPromise])
    .then(
        results => {
            console.log('Both Promises Successfully Completed ...');
            console.log('This line should be executed only AFTER both promises are RESOLVED!');
        },
        error => console.log('One of the promises failed!'));

