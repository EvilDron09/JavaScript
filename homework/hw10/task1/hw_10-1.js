// #sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', ()=>{
    document.getElementById('text').remove();
});

// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом.

const someForm = document.forms.form;
someForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const name = someForm.name.value;
    const surname = someForm.surname.value;
    const age = someForm.age.value;
    let obj = {name,surname,age};
    localStorage.setItem('obj',JSON.stringify(obj))
})

// #2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

