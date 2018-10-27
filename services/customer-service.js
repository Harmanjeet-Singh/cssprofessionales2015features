import { Customer } from '../models';
import { RandomGenerator } from '../utilities';

const DEFAULT_NO_OF_CUSTOMERS = 20;
const MINIMUM_CREDIT = 10000;
const MAXIMUM_CREDIT = 50000;
const REMARKS = 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.';
const CUSTOMERS_SYMBOL = Symbol('Customer Services Set');

class CustomerService {
    constructor(noOfCustomerRecords = DEFAULT_NO_OF_CUSTOMERS) {
        this[CUSTOMERS_SYMBOL] = new Set();

        for (let index = 0; index < noOfCustomerRecords; index++) {
            let id = index + 1;
            let name = `Customer-${RandomGenerator.generateRandom()}`;
            let address = 'Bangalore';
            let credit = RandomGenerator.generateRandom(MINIMUM_CREDIT, MAXIMUM_CREDIT);
            let status = index % 2 === 0;
            let customer = new Customer(id, name, address, credit, status, REMARKS);

            this[CUSTOMERS_SYMBOL].add(customer);
        }
    }

    *[Symbol.iterator]() {
        for (let customer of this[CUSTOMERS_SYMBOL]) {
            yield customer;
        }
    }
}

export {
    CustomerService
};
