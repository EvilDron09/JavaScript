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

function cardSuitRed  (color, cardSuit){
    for (const colorElement of color) {
        if(colorElement === 'red'){
             red =[cardSuit[1], cardSuit[2]]
        }
    }
    return red
}
function cardSuitBlack  (color, cardSuit){
    for (const colorElement of color) {
        if(colorElement === 'black'){
             black =[cardSuit[0], cardSuit[3]]
        }
    }
    return black
}

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

 console.log(cardSuitRed(color,cardSuit).concat(meaning));

 let qwe =''
for (const item of meaning) {
    qwe += ' ' + cardSuit[1] + ' ' + item
}
console.log(qwe);

let sliceMeaningClubs = meaning.slice(3,meaning.length);
let zxc =''
for (const item of sliceMeaningClubs) {
    zxc += ' ' + cardSuit[3]+ ' ' + item
}
console.log(zxc);

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//   spades:[],
//   diamonds:[],
//   hearts:[],
//   clubs:[]
// }


let desk = meaning.reduce((suits, values) =>{
    for (const item of values) {
        suits.spades.push(values);
        suits.diamonds.push(values);
        suits.hearts.push(values);
        suits.clubs.push(values);
    }
    return suits
}, {spades:[],diamonds:[],hearts:[],clubs:[]});
console.log(desk)
