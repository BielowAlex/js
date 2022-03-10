// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let f1 = document.forms[0];
f1.onsubmit = function (e){
    e.preventDefault();

    let person = {name:e.target.name.value,age:e.target.age.value};

    localStorage.setItem('Person1',JSON.stringify(person));
}

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let f2 = document.forms[1];
let cars = [];

f2.onsubmit = function (e){
    e.preventDefault();

    let car = {model:e.target.model.value,type:e.target.type.value,volume:e.target.volume.value};

    cars.push(car);

    localStorage.setItem('Cars',JSON.stringify(cars))

}