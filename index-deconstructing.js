// Deconstructing

let obj = {
    id: 10,
    name: 'Rajesh',
    address: 'Mumbai',
    credit: 2300,
    status: true
};

let { name, address } = obj;

console.log(`Name : ${name}, Address : ${address}`);

function processCustomerRecord(
    { name: ename, address: eaddress }) {
    console.log(`Processed Details : ${ename}, ${eaddress}`);
}

processCustomerRecord(obj);

const getX = () => 20;
const getValues = () => [10, 20, 30, 40, 50];

let [a, b, , d, e, f = getX()] = getValues();

console.log(a + ', ' + b + ', ' + d + ', ' + e + ', ' + f);