// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор
const books = [
    {
        title: "Добрі знамення",
        pages: 448,
        authors: ["Террі Пратчетт", "Ніл Гейман"],
        genres: ["Гумористичне фентезі"]
    },
    {
        title: "Маруся Чурай",
        pages: 190,
        authors: ["Ліна Костенко"],
        genres: ["Історичний роман", "Поезія"]
    },
    {
        title: "Сліпобачення",
        pages: 400,
        authors: ["Пітер Воттс"],
        genres: ["Наукова фантастика", "Тверда НФ"]
    },
    {
        title: "Чотири квартети",
        pages: 112,
        authors: ["Т. С. Еліот"],
        genres: ["Поезія", "Модернізм"]
    },
    {
        title: "Талісман",
        pages: 928,
        authors: ["Стівен Кінг", "Пітер Страуб"],
        genres: ["Фентезі", "Жахи"]
    },
    {
        title: "Економіка в одній лекції",
        pages: 214,
        authors: ["Генрі Гезліт"],
        genres: ["Економіка", "Нон-фікшн"]
    },
    {
        title: "Проєкт «Аве Марія»",
        pages: 480,
        authors: ["Енді Вейр"],
        genres: ["Наукова фантастика"]
    },
    {
        title: "Як писати книги",
        pages: 320,
        authors: ["Стівен Кінг"],
        genres: ["Мемуари", "Посібник"]
    },
    {
        title: "100 років самотності",
        pages: 448,
        authors: ["Габріель Гарсія Маркес"],
        genres: ["Магічний реалізм"]
    },
    {
        title: "Дивовижний новий світ",
        pages: 288,
        authors: ["Олдос Гакслі"],
        genres: ["Антиутопія"]
    },
    {
        title: "Шість капелюхів мислення",
        pages: 200,
        authors: ["Едвард де Боно"],
        genres: ["Психологія", "Саморозвиток"]
    },
    {
        title: "Коротка історія часу",
        pages: 256,
        authors: ["Стівен Гокінг"],
        genres: ["Наукпоп", "Фізика"]
    },
    {
        title: "Американські боги",
        pages: 600,
        authors: ["Ніл Гейман"],
        genres: ["Фентезі", "Міфологія"]
    },
    {
        title: "Звіроферма",
        pages: 120,
        authors: ["Джордж Орвелл"],
        genres: ["Сатира", "Алегорія"]
    },
    {
        title: "Маніфест інвестора",
        pages: 272,
        authors: ["Вільям Бернстайн"],
        genres: ["Фінанси"]
    },
    {
        title: "Збірка української фантастики",
        pages: 512,
        authors: ["Володимир Арєнєв", "Ярослав Мельник"],
        genres: ["Антологія", "Фантастика"]
    },
    {
        title: "Структура та інтерпретація комп'ютерних програм",
        pages: 672,
        authors: ["Гарольд Абельсон", "Джулі Сассман"],
        genres: ["Програмування", "Освіта"]
    },
    {
        title: "Еволюція мислення",
        pages: 380,
        authors: ["Даніель Канеман", "Амос Тверські"],
        genres: ["Поведеність", "Психологія"]
    },
    {
        title: "Чорна рада",
        pages: 288,
        authors: ["Пантелеймон Куліш"],
        genres: ["Історичний роман"]
    },
    {
        title: "Велика книга казок",
        pages: 450,
        authors: ["Різні автори"],
        genres: ["Фольклор", "Дитяча література"]
    }
];
let maxPages = 0;

for (const book of books) {
    if(book.pages>maxPages){
        maxPages = book.pages;

    }
}
console.log(maxPages);

const maxGenres = Math.max(...books.map(g =>g.genres.length));
const genresFilter = books.filter(g => g.genres.length === maxGenres);
console.log(genresFilter);

const maxTitle = Math.max(...books.map(t => t.title.length));
console.log( books.filter(t =>t.title.length === maxTitle));


for (const book of books) {
    if(book.authors.length ===2){
        console.log(book.authors);
    }
}

for (const book of books) {
    if(book.authors.length ===1){
        console.log(book.authors);
    }
}

// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.
// b. заповнити його 50 непарними числами за допомоги циклу.
// c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let numsParied = [];
for (let i = 2; numsParied.length < 50; i+=2) {
    numsParied.push(i)
}
console.log(numsParied);

let numsUnpared = []
for (let i = 1; numsUnpared.length< 50; i++) {
  if(i%2!==0){
      numsUnpared.push(i)
  }
}
console.log(numsUnpared)

const randomNums = Array.from({length: 20}, () =>(Math.random()*20));
console.log(randomNums);

let randomNumsArray=[];

function randomNum(max,min){
    return Math.floor(Math.random()*(max - min))
}

for (let i = 0; randomNumsArray.length < 20; i++) {
    randomNumsArray.push(randomNum(732,8));
}
console.log(randomNumsArray);

// 2. Вивести за допомогою console.log кожен третій елемент
for (let i = 0; i < books.length; i+=3) {
    console.log(books[i].title);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < randomNumsArray.length; i+=3) {
    if(randomNumsArray[i]%2===0) {
        console.log(randomNumsArray[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let newArr = [];
for (let i = 2; i < randomNumsArray.length; i+=3) {
    if(randomNumsArray[i]%2===0){
        newArr.push(randomNumsArray[i]);
    }

}
console.log(newArr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let newArray =[]
for (let i = 0; i < randomNumsArray.length-1; i++) {
    if(randomNumsArray[i+1]%2===0){
        newArray.push(randomNumsArray[i]);
    }

}
console.log(newArray);
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
const check =[100,250,50,168,120,345,188];
let checkSum = 0
for (const number of check) {
   checkSum+=number
}
console.log(checkSum/check.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const randomArray = Array.from({length:5},()=> Math.floor(Math.random()*50)+1);
console.log(randomArray)
let newRandomArray = []
for (const item of randomArray) {
    const multiplication = item *5
    newRandomArray.push(multiplication);
}
console.log(newRandomArray)

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
const valueArray = ['vasya', 22, 'name', 45,12,'world','hello',23,{},true];
let numsValue =[];
for (const item of valueArray) {
    if(typeof item  === 'number'){
        numsValue.push(item);
    }
}
console.log(numsValue);

// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:
let usersWithId = [
{id: 1, name: 'vasya', age: 31, status: false},
{id: 2, name: 'petya', age: 30, status: true},
{id: 3, name: 'kolya', age: 29, status: true},
{id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
{user_id: 3, country: 'USA', city: 'Portland'},
{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
{user_id: 2, country: 'Poland', city: 'Krakow'},
{user_id: 4, country: 'USA', city: 'Miami'}
];
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: ‘vasya’,
// age: 31,
//     status: false,
//     address: {
//     user_id: 1, // <===
//         country: ‘Ukraine’,
//     city: ‘Ternopil’
// }
// },
// // TO BE CONTINUED …..
// ]
let usersAndCities = usersWithId.map(user =>{
    const city = citiesWithId.find(city =>city.user_id === user.id);
    return {
        ...user,
        address:city,
    }
})
console.log(usersAndCities);

// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const randomTenNumArr = Array.from ({length:10},() => Math.floor(Math.random()*100)+1);
console.log(randomTenNumArr);
let newRandomTenNumArrParied =[]
for (const element of randomTenNumArr) {
    if(element%2===0){
        newRandomTenNumArrParied.push(element);
    }
}
console.log(newRandomTenNumArrParied);
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newRandomTenNumArr =[]
for (const item of randomTenNumArr) {
    newRandomTenNumArr.push(item)
}
console.log(newRandomTenNumArr);
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
const letters = [ 'a', 'b', 'c'];
let wordFor ='' ;
for (let i = 0; i < letters.length; i++) {
   wordFor += (letters[i]);
}
console.log(wordFor);
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let wordWhile = '';
let i =0
while (i<letters.length){
    wordWhile+=letters[i];
    i++
}
console.log(wordWhile)
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.


let wordForOf = '';
for (const letter of letters) {
    wordForOf += letter;
}
console.log(wordForOf);
