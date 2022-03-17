//get info from local storage\\
let productList = JSON.parse(localStorage.getItem('Products'));
//get wrap of Products \\
//Function product list\\
let wrap = document.querySelector('.products_wrap');

for (let i = 0; i < productList.length; i++) {
    let divProduct = document.createElement('div');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let quantity = document.createElement('p');
    let price = document.createElement('p');
    let btn = document.createElement('button');

    divProduct.classList.add('product');
    img.src = `${productList[i].photo}`;
    h2.innerText = `${productList[i].name}`;
    quantity.innerText = `${productList[i].quantity}-шт.`
    price.innerText = `${productList[i].price}-грн/кг.`
    btn.innerText = `Видалити товар`;

    btn.onclick = () => {
        productList.splice(i, 1);
        localStorage.setItem('Products', JSON.stringify(productList))

        window.location.reload();
    };

    divProduct.append(img, h2, quantity, price, btn);
    wrap.append(divProduct);
}
//remove all\\
let removeAll = document.getElementById('remove');

removeAll.onclick = ()=>{
    productList = [];
    localStorage.setItem('Products', JSON.stringify(productList))

    window.location.reload();
};
