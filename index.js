function getCustomers(serviceUrl) {
    console.log('Connecting to the Service URL ... ' + serviceUrl);
    console.log('Fetching the Data ...');

    let data = `
    [{
        "id": 1,
        "name": "Cookie Gabbott",
        "address": "Ape",
        "creditLimit": 20667,
        "status": false,
        "remarks": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
      }, {
        "id": 2,
        "name": "Raynell Cunnington",
        "address": "Sieniawa Żarska",
        "creditLimit": 21865,
        "status": true,
        "remarks": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.In congue. Etiam justo. Etiam pretium iaculis justo.In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
      }, {
        "id": 3,
        "name": "Kendricks Murthwaite",
        "address": "Krasnoyarka",
        "creditLimit": 48272,
        "status": false,
        "remarks": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
      }, {
        "id": 4,
        "name": "Tish Wilcockes",
        "address": "Pansoy",
        "creditLimit": 32313,
        "status": false,
        "remarks": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      }, {
        "id": 5,
        "name": "Penelopa Jeacocke",
        "address": "Oliveira",
        "creditLimit": 21108,
        "status": false,
        "remarks": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
      }, {
        "id": 6,
        "name": "Syman Thwaite",
        "address": "Loma Alta",
        "creditLimit": 37595,
        "status": false,
        "remarks": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
      }, {
        "id": 7,
        "name": "Janeen Ciotto",
        "address": "Aveiro",
        "creditLimit": 14651,
        "status": false,
        "remarks": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
      }, {
        "id": 8,
        "name": "Abigale Habergham",
        "address": "Ksawerów",
        "creditLimit": 29113,
        "status": false,
        "remarks": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
      }, {
        "id": 9,
        "name": "Renaud Long",
        "address": "Danidehe",
        "creditLimit": 33579,
        "status": false,
        "remarks": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
      }, {
        "id": 10,
        "name": "Wade Clinkard",
        "address": "Elbasan",
        "creditLimit": 46656,
        "status": false,
        "remarks": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
      }]`;

    let customers = JSON.parse(data);

    return customers;
}

function processCustomers() {
    console.log('Processing Started ...');

    let serviceUrl = 'https://mockapi.io/services/harmanjeetprojects/customers';
    let customers = getCustomers(serviceUrl);

    console.log('Using Customer Records ...');

    customers.forEach(customer => console.log(customer.name));

    console.log('Processing Completed ...');
}

let cachedData = [];

getCustomers = new Proxy(getCustomers, {
    apply: (target, current, args) => {
        console.info('Proxy Started ...');

        if (!cachedData || cachedData.length <= 0) {
            console.log('Calling the original ...');
            cachedData = target(...args);
            console.log('Got the Result and Cached ...');
        } else {
            console.log('Using the Cache ...');
        }

        return cachedData;
    }
});

processCustomers();

console.log('One More time ... \n\n\n');

processCustomers();

