// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let divProductsCarts = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((value) =>{
        // console.log(value)
        let {carts} = value
        for (const {id, products, total, discountedTotal, totalProducts, totalQuantity, userId} of carts) {
            let divCart = document.createElement('div');
            let idCarts = document.createElement('h2');
            idCarts.innerText = `ID Cart: ${id}`;
            let divProducts = document.createElement('div');

            for (const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} of products) {
                let divProduct = document.createElement('div')
                let idProduct = document.createElement('h4');
                idProduct.innerText = `ID Product: ${id}`;
                let titleProduct = document.createElement('h4');
                titleProduct.innerText = `${title}`;
                let priceProduct = document.createElement('p');
                priceProduct.innerText = `${price} UAH`;
                let thumbnailImg = document.createElement('img');
                thumbnailImg.src = `${thumbnail}`
                let quantityTotal = document.createElement('p');
                quantityTotal.innerText = `Quantity - ${quantity}, Total - ${total}`;
                let discount = document.createElement('p');
                discount.innerText = `Discount Percentage: ${discountPercentage} %, Discounted Total - ${discountedTotal}`;
                divProduct.append(idProduct, titleProduct,priceProduct,thumbnailImg,quantityTotal,discount);
                divProducts.append(divProduct);
            }

            let pTotal = document.createElement('p');
            pTotal.innerText = `Total - ${total},  Discounted Total - ${discountedTotal},  Total Products - ${totalProducts},  Total Quantity - ${totalQuantity}`;
            let pUserId = document.createElement('p');
            pUserId.innerText = `User ID: ${userId}`;
            divCart.append (idCarts,divProducts,pTotal,pUserId);
            divProductsCarts.appendChild(divCart);
        }
    });

