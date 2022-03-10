// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.


let favorites = [];

for (const user of users) {
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.columnGap = '20px';
    div.style.border = '1px solid black'
    div.style.padding = '10px';

    let photo = document.createElement("img");
    photo.src = 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
    div.append(photo);

    let info = document.createElement('div');

    let name = document.createElement('h2');
    name.innerText = `name: ${user.name}`;
    info.append(name);

    let age = document.createElement('h2');
    age.innerText = `age: ${user.age}`;
    info.append(age);

    let status = document.createElement('h2');
    status.innerText = `status: ${user.status}`;
    info.append(status);

    let button = document.createElement("button");
    button.innerText = 'Додати до улюблених♥';
    button.style.fontSize = '24px';
    button.style.color = 'black';
    button.style.borderRadius = '50px';
    button.style.background = 'white';
    button.style.margin = '100px auto';

    button.onclick = function (){
        favorites.push(user);
        localStorage.setItem('Favorites',JSON.stringify(favorites));
    }

    div.append(info);
    div.append(button);
    document.body.append(div);
}

let goToFavorites = document.createElement("button");
goToFavorites.innerText = 'Перейти до улюблених♥';
goToFavorites.style.fontSize = '24px';
goToFavorites.style.color = 'black';
goToFavorites.style.borderRadius = '50px';
goToFavorites.style.background = 'white';
goToFavorites.style.margin = '20px auto';
goToFavorites.style.padding = '5px';

goToFavorites.onclick = function (){
    location.href = 'favorites.html'
}

document.body.append(goToFavorites);