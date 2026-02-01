// #XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)

function User(id, name, surname, email, phone ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(3,'vasya','petrov', 'vpetron543@gmail.com','+380999999999'),
    new User(5,'petya','stoliarov', 'hhudw23@gmail.com', '+380673229102'),
    new User(2,'max','petrov', 'ajdkajsdki323@gmail.com', '+38076431212'),
    new User(4,'olga','pupkina','tjdfgjdo@gmail.com', '+380234556332'),
    new User(1,'anna','pupkina','shdfikie@gmail.com', '+380765454456'),
    new User(6, 'nikita','ivanov', 'dasd4321@gmail.com','+380694837342'),
    new User(7,'andrey', 'ivanov', 'ajsdiji@gmail.com',"+380436534567"),
    new User(10,'natalia', 'petrova', 'jijiasjai@gmail.com', '+380345245234'),
    new User(9, 'lena', 'oleinik', 'shfuisiu@gmail.com', '+380645367896'),
    new User(8, 'tanya', 'petrova', 'gfdgjdio@gmail.com', '+380536738278'),
]

console.log(users);

// #2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const filter = users.filter((user) => user.id %2 ===0);
console.log(filter);

// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sort = users.sort((user1, user2) => user1.id-user2.id);
console.log(sort);

// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname , email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

function Products(title,pries) {
    this.title = title;
    this.pries = pries;
}

let clients = [
    new Client(1,'vasya','petrov','vpetron543@gmail.com','+380999999999',
        [new Products('tv', 13500), new Products('phone', 5600)]),
    new Client(2,'petya','stoliarov','hhudw23@gmail.com','+380673229102',
        [new Products('phone', 22500)]),
    new Client(3,'roma', 'ivanov','hasdhuii@gmail.com', '+380543447378',
        [new Products('computer', 150000)]),
    new Client(4,'max','petrov','ajdkajsdki323@gmail.com','+38076431212',
        [new Products('tv', 50000)]),
    new Client(5,'tanya', 'petrova', 'gfdgjdio@gmail.com', '+380536738278',
        [new Products('monitor', 25000)]),
    new Client(6,'andrey', 'ivanov', 'ajsdiji@gmail.com','+380436534567',
        [new Products('keyboard', 1500, 'computer mouse', 600), new Products('headphones', 1000)]),
    new Client(7,'natalia', 'petrova', 'jijiasjai@gmail.com', '+380345245234',
        [new Products('fridge', 30000)]),
    new Client(8,'nikita','ivanov', 'dasd4321@gmail.com','+380694837342',
        [new Products('boiler', 7000)]),
    new Client(9,'anna','pupkina','shdfikie@gmail.com', '+380765454456',
        [new Products('vacuum cleaner', 3000,), new Products('boiler', 4000)]),
    new Client(10,'sveta', 'ivanova', 'hsdkjfi@gmail.com', '+380673929291',
        [new Products('electric kettle', 500), new Products('vacuum cleaner', 5000)]),
]

console.log(clients)
