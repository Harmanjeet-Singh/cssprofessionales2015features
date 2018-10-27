import { Customer } from './customer';

class InternetCustomer extends Customer {
    constructor(id, name, address, creditLimit, status, remarks, blogUrl) {
        super(...arguments);

        this.blogUrl = blogUrl;
    }
}

export {
    InternetCustomer
};
