import { ObjectFormatter } from '../utilities';

const INVALID_ARGUMENT_SPECIFIED = 'Invalid Argument(s) Specified!';
const DEFAULT_DELIMITER = ',';

class Customer {
    constructor(id, name, address, creditLimit, status, remarks) {
        [
            this.id,
            this.name, this.address,
            this.creditLimit, this.status,
            this.remarks
        ] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }

    static create(csvString, delimiter = DEFAULT_DELIMITER) {
        if (!csvString) {
            throw new Error(INVALID_ARGUMENT_SPECIFIED);
        }

        let splittedString = csvString.split(delimiter);
        let customer = new Customer(...splittedString);

        return customer;
    }
}

export {
    Customer
};
