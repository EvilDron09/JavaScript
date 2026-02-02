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
        [new Products('keyboard', 1500,), new Products('computer mouse', 600), new Products('headphones', 1000)]),
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

// #8abtVjRv
// // – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

console.log(clients.sort((a,b) => a.order.length - b.order.length));

// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, producer, year,maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (){
        for (const key in this) {
            console.log(key,this[key]);
        }
    }
    this.increaseMaxSpeed = function (maxSpeed) {
        if(maxSpeed > 0) this.maxSpeed = this.maxSpeed + maxSpeed;
    }
    this.changeYear = function (newYear) {
        if(newYear > 1812) this.year = newYear;
    }
    this.addDriver = function (driver) {
        if(driver) this.driver = driver;
    }
}

const car = new Car('911', 'Porsche', 1998, 230, 2,2);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
console.log(car);
car.changeYear(2004);
console.log(car);
car.addDriver({name: 'vasya', surname: 'pupkin'});
console.log(car);

// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт

class CarClass{

    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(){
        for (const key in this) {
            console.log(key,this[key]);
        }
    }
    increaseMaxSpeed(maxSpeed){
        if(maxSpeed > 0) this.maxSpeed = this.maxSpeed + maxSpeed;
    }
    changeYear(newYear){
        if(newYear > 1812) this.year = newYear
    }
    addDriver(driver){
        if(driver) this.driver = driver;
    }
}
const carClass = new CarClass('911', 'Porsche', 1998, 230, 2,2);
console.log(carClass);
carClass.drive();
carClass.info();
carClass.increaseMaxSpeed(100);
console.log(carClass);
carClass.changeYear(2004);
console.log(carClass);
carClass.addDriver({name: 'vasya', surname: 'pupkin'});
console.log(carClass);

// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const  cinderellas  =[
    new Cinderella('cinderella1', 20,34),
    new Cinderella('cinderella2', 21, 35),
    new Cinderella('cinderella3', 23, 36),
    new Cinderella('cinderella4', 25,37),
    new Cinderella('cinderella5', 22,38),
    new Cinderella('cinderella6', 26, 39),
    new Cinderella('cinderella7', 24, 40),
    new Cinderella('cinderella8', 26, 41),
    new Cinderella('cinderella9', 25,42),
    new Cinderella('cinderella10', 24,43),
]

const prince = new Prince('prince', 27,37);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.slipper){
        console.log(cinderella);
    }
}

console.log(cinderellas.find(cinderella =>cinderella.footSize === prince.slipper));
