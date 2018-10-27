let id = 10;
let name = 'Vinod Kumar';
let address = 'First Row';
let creditLimit = 23000;

import { Customer } from './models';
import { ObjectFormatter } from './utilities';

const getX = () => 20;

let customerObject = {
    id, name, address, creditLimit,
    status: true,
    remarks: 'Simple and Sample Customer Record',
    doWork: () => console.log('Work is in Progress ...'),
    [`Property${getX()}`]: 200,
    __proto__: new Customer
};

console.log(customerObject instanceof Customer);
console.log(customerObject.toString());

customerObject.doWork();
