// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function square(aNum,bNum){
    result = aNum*bNum
    return result ;
}

console.log(square(20,20));

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function roundSquare(radius){
    return Math.PI*radius*radius
}

console.log(roundSquare(3));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function squareCilinder(height,radius){
    return 2*Math.PI*radius*height;
}

console.log(squareCilinder(3,5))

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент//

function foobarArray(array){
    for (const item of array) {
    console.log(item);
    }
}

// #59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function foobarText(text){
    document.write(`<p>${text}</p>`)
}

foobarText('Hello World' )

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function foobarUl(text){
    document.write(`
       <ul>
       <li>${text}</li>
       <li>${text}</li>
       <li>${text}</li>
       </ul>
`);
}

foobarUl('Vasya','Petya','Max');

// #0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числови(тут використовувати цикл) та виводить його через document.write

function foobarList( text, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`
        <li>${text}</li>
        `);
    }
    document.write(`</ul>`)
}

foobarList('Hello World',5)

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function foobarPrimitives(arrayOfPrimitives){
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`
            <li>${item}</li>
        `);
    }
    document.write(`</ul>`)
}
foobarPrimitives([123,true,'vasya',5436])

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function users(users){
    for (const user of users) {
        document.write(`
        <div>${user.id} ${user.name} ${user.age} </div>
        `);
    }
}
users([
    {id:1, name:'Vasya', age:24},
    {id:2, name:'Vasya', age:24},
    {id:3, name:'Vasya', age:24},
    {id:4, name:'Vasya', age:24},
    {id:5, name:'Vasya', age:24},
]);

//#pghbnSB
// – створити функцію, яка повертає найменше число з масиву

function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i<numbers.length; i++) {
        let number = numbers[i];
        if(number<min){
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([111, 22, 33, 44]));
// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let basket = 0
    for (const item of arr) {
        basket = basket +item
    }
    return basket
}

console.log(sum([1,2,10]));

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
    if(index1<arr.length && index2<arr.length){
    let chel = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = chel
   return arr
    }
    return -Infinity
}
console.log(swap([11,22,33,44],0,1))

