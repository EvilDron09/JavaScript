// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

let square = (aNum,bNum)=> aNum*bNum;
console.log(square(10,20));

// #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r


let roundSquare = (radius) => Math.PI*radius*radius
console.log(roundSquare(3));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

let squareCilinder = (height,radius) => 2*Math.PI*radius*height;
console.log(squareCilinder(3,5));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

let foobarArray = (array) => {
    for (const item of array){
        console.log(item);
        }
    }

foobarArray([1,2,4,56,76])

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

let foobarText = (text) =>
    document.write(`<p>${text}</p>`);

foobarText('Hello World' );

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let foobarUl = (text) =>
    document.write(`
       <ul>
       <li>${text}</li>
       <li>${text}</li>
       <li>${text}</li>
       </ul>
    `);

foobarUl('Vasya','Petya','Max');

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let foobarList = ( text, counter) => {
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
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let foobarPrimitives = (arrayOfPrimitives) => {
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
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.

let users = (users) => {
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

let arrayMinValue = (numbers) =>{
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
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let basket = 0;
let sum = (arr) => {
    for (const item of arr) {
        basket = basket +item
    }
}

sum([1,2,10]);
console.log(basket);

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    if(index1<arr.length && index2<arr.length){
        let chel = arr[index1];
        arr[index1] = arr[index2]
        arr[index2] = chel
        return arr
    }
    return -Infinity
}
console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

// let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//     if(exchangeCurrency === 'USD'){
//         let sum = sumUAH/currencyValues[0].value;
//         console.log(sum)
//     }else if(exchangeCurrency === 'EUR'){
//         let sum = sumUAH/currencyValues[1].value;
//         console.log(sum)
//     }else {
//         console.log('Такої валюти немає!')
//     }
//
// }

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            chosenCurrency = item;
        }
    }
    return sumUAH/chosenCurrency.value;
}

console.log (exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));