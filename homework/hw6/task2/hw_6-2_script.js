// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//  – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

let cardSuit = [ 'spade','diamond','heart', 'clubs'];
let meaning = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
let color = ['red','black'];

function deskOfCardsSpadeAce(cardSuit, meaning) {
    let spadeAce;
    for (const spade of cardSuit) {
        if (spade === 'spade'){
            for (const spadeElement of meaning) {
                if(spadeElement ==='ace'){
                   spadeAce =`${spade} ${spadeElement}`;
                }
            }
        }
    }
    return spadeAce
}

console.log(deskOfCardsSpadeAce(cardSuit, meaning));

let asd =''
let sliceMeaning = meaning.slice(0,1);

 for (const item of cardSuit) {
     asd += ' ' + sliceMeaning + ' ' + item
}
 console.log(asd);






// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//   spades:[],
//   diamonds:[],
//   hearts:[],
//   clubs:[]
// }
