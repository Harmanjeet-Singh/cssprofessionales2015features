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

async function sequentialAsyncProcess() {
    try {
        let result1 = await doHeavyWork(200);
        let result2 = await doHeavyWork2(300);

        console.log(result1);
        console.log(result2);
    } catch (error) {
        console.log('Error Occurred, Details : ' + error.message);
    }
}

async function process() {
    try {
        let promise1 = doHeavyWork(200);
        let promise2 = doHeavyWork2(300);
        let results = await Promise.all([promise1, promise2]);

        console.log(results[0]);
        console.log(results[1]);
    } catch (error) {
        console.log('Error Occurred, Details : ' + error.message);
    }
}

process()
    .then(success => console.log('Successfully Completed ...'))
    .catch(error => console.log('Error Occurred in Processing!'));