// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

User.prototype = function (){
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
users.forEach((value, index) => console.log(value,index));
let sort = users.filter(user => user.id % 3 === 0);
console.log(sort);


