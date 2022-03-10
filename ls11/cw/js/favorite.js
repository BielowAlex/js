// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let favorites = JSON.parse(localStorage.getItem('Favorites'));
console.log(favorites);

for (const favorite of favorites) {

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
    name.innerText = `name: ${favorite.name}`;
    info.append(name);

    let age = document.createElement('h2');
    age.innerText = `age: ${favorite.age}`;
    info.append(age);

    let status = document.createElement('h2');
    status.innerText = `status: ${favorite.status}`;
    info.append(status);

    div.append(info);
    document.body.append(div);
}