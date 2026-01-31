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
    new User(1,'vasya','petrov', 'vpetron543@gmail.com','+380999999999'),
    new User(2,'petya','stoliarov', 'hhudw23@gmail.com', '+380673229102'),
    new User(3,'max','petrov', 'ajdkajsdki323@gmail.com', '+38076431212'),
    new User(4,'olga','pupkina','tjdfgjdo@gmail.com', '+380234556332'),
    new User(5,'anna','pupkina','shdfikie@gmail.com', '+380765454456'),
    new User(6, 'nikita','ivanov', 'dasd4321@gmail.com','+380694837342'),
    new User(7,'andrey', 'ivanov', 'ajsdiji@gmail.com',"+380436534567"),
    new User(8,'natalia', 'petrova', 'jijiasjai@gmail.com', '+380345245234'),
    new User(9, 'lena', 'oleinik', 'shfuisiu@gmail.com', '+380645367896'),
    new User(10, 'tanya', 'petrova', 'gfdgjdio@gmail.com', '+380536738278'),
]

console.log(users)
