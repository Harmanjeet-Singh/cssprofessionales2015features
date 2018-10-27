import { Customer } from './models';
import { CustomerService } from './services';
class MainClass {
    static main1() {
        try {
            let csvString = '10,Harmanjeet,Bangalore,12000,true,Simple Student Record';
            let customer = Customer.create(csvString);

            console.log(`Processed Customer Details : ${customer.toString()}`);
        } catch (error) {
            console.error(`Error Occurred, Details : ${error.message}`);
        }
    }

    static main() {
        try {
            let customerService = new CustomerService(10);

            for (let customer of customerService) {
                console.log(customer.toString());
            }

            // Doesn't include Symbol property in serialization
            console.log(JSON.stringify(customerService));
        } catch (error) {
            console.log(`Error Occurred, Details : ${error.message}`);
        }
    }
}

MainClass.main();
