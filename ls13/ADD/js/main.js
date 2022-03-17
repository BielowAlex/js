let productsList = []
//FORM SUBMIT\\
let form = document.forms[0];


form.onsubmit = (e)=>{
    e.preventDefault();
    let product = {
      name:e.target.product_name.value,
      quantity:e.target.quantity.value,
      price:e.target.price.value,
      photo:e.target.photo.value
    };
    productsList.push(product);
    localStorage.setItem('Products',JSON.stringify(productsList))

    e.target.product_name.value = '';
    e.target.quantity.value = '';
    e.target.price.value = '';
    e.target.photo.value = '';
}