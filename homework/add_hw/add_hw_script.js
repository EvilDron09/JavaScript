const probel = '-------------------'

// #WpkK0ZH1
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

const nums =[1,22,4543,23,56];
console.log(nums);
const asd = ['asd', 'name','hello', 'world', 'qwe'];
console.log(asd);
const qwe = ['asd', 'name','hello', 'world', 'qwe',1,22,4543,23,56,true,false,false,true,false];
console.log(qwe);
console.log(probel);
// #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
console.log(probel);
const names =[];
names[0] = 'vasya';
names[1] = 'petya';
names[2] = 'max';
names[3] = 'olga';
names[4] = 'ulia';
console.log(names);
console.log(probel);

// #qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
console.log(probel);
const numbers = [2,17,13,6,22,31,45,66,100,-18];
//
// let i = 0;
// while (i<numbers.length) {
//     let numberWhile = numbers[i];
//     console.log( numberWhile);
//     i++;
// }
//
// console.log(probel);
//
// for (const numberFor of numbers) {
//     console.log(numberFor);
// }
//
// console.log(probel);
//
// let n = 0;
// while (n<numbers.length) {
//     let numberWhile = numbers[n];
//     if(numberWhile % 2 !== 0){
//     console.log( numberWhile);
//     }
//     n++
// }
//
// console.log(probel);
//
// for (const numberFor of numbers) {
//     if(numberFor %2 !==0){
//     console.log(numberFor);
//     }
// }
//
// console.log(probel);
//
// let p = 0;
// while (p<numbers.length) {
//     let numberWhile = numbers[p];
//     if(numberWhile % 2 === 0){
//         console.log( numberWhile);
//     }
//     p++
// }
//
// console.log(probel);
//
// for (const numberFor of numbers) {
//     if(numberFor %2 ===0){
//         console.log(numberFor);
//     }
// }
//
// console.log(probel);
//
// for (const numberFor of numbers) {
//    if (numberFor %3===0) {
//        numOkten = 'okten';
//    }else {
//        numOkten= numberFor;
//    }
//     console.log(numOkten);
// }

console.log(probel);

const numbersRevers = numbers.reverse();
console.log(numbersRevers);

console.log(probel);

let r = 0;
while(r<numbersRevers.length){
    let number = numbersRevers[r];
    console.log(number);
    r++
}

console.log(probel);

for (const numberRever of numbersRevers) {
    console.log(numberRever);
}

console.log(probel);

let rn = 0;
while (rn<numbersRevers.length){
    let number = numbersRevers[rn];
    if(number %2 !==0){
        console.log(number);
    }
    rn++;
}

console.log(probel);

for (const numberRever of numbersRevers) {
    if(numberRever %2 !== 0){
        console.log(numberRever);
    }
}

console.log(probel);

let rp = 0;
while (rp<numbersRevers.length){
    let number = numbersRevers[rp];
    if(number %2 === 0){
        console.log(number);
    }
    rp++;
}

console.log(probel);

for (const numberRever of numbersRevers) {
    if(numberRever %2 === 0){
        console.log(numberRever);
    }
}

console.log(probel);

for (const numberRever of numbersRevers) {
    if(numberRever %3 === 0){
       numberReverOkten = 'okten';
    }else {
        numberReverOkten = numberRever;
    }
    console.log(numberReverOkten);
}

console.log(probel);
console.log(probel);

// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

const numbs = Array.from({length: 10}, ((numb, index)=> index+1))
for (const numb of numbs) {
    console.log(numb)
}
console.log(probel);
//  #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.

const strings = ['qwe', 'asd', 'hello', 'vasya', 'world', 'zcv', 'fgh','rty', 'dfg', 'xlk'];
for (const string of strings) {
    console.log(string);
}

console.log(probel);
// #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
const arr = [true,124,false,'hello',2435,false,'vasya',false,902,'world'];
for (const arrElement of arr) {
    console.log(arrElement);
}
console.log(probel);

// #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

const qwes = ['asd', 'name','hello', 'world', 'qwe',1,22,4543,23,56,true,false,false,true,false];
for (const item of qwes) {
    if(typeof item ==='boolean'){
        console.log(item)
    }
}
console.log(probel);

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const item of qwes) {
    if(typeof item === 'number'){
        console.log(item);
    }
}
console.log(probel);

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (const item of qwes) {
    if(typeof item === 'string'){
        console.log(item);
    }
}
console.log(probel);
