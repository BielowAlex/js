// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку ,при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let photoLink = 'data:image/jpeg;base64,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';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        localStorage.setItem('Users',JSON.stringify(users));

        let usersList = document.querySelector('.users_list');

        for (const user of users) {
            let userDiv = document.createElement('div');
            let img = document.createElement('img');

            let desc = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let a = document.createElement('a');

            userDiv.classList.add('user')
            desc.classList.add('desc')
            img.src = photoLink;
            h3.innerText = `${user.name}`;
            p.innerText = `ID:  ${user.id}`;

            a.href = 'user-details.html';
            a.innerText = 'Інформація про користувача';
            a.onclick = ()=>{
              localStorage.setItem('user',JSON.stringify(user));
            }
            desc.append(h3,p,a);
            userDiv.append(img,desc);
            usersList.append(userDiv);
        }
    });