// #mkGDenYnNjn.html
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400



function exchange(sumUAH,currencyValues,exchangeCurrency) {
     if(exchangeCurrency === 'USD'){
        let sum = sumUAH/currencyValues[0].value;
         console.log(sum)
     }else if(exchangeCurrency === 'EUR'){
         let sum = sumUAH/currencyValues[1].value;
         console.log(sum)
     }else {
         console.log('Такої валюти немає!')
     }

}

exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD');

