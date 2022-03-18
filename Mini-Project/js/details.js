// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
let photoLink = 'data:image/jpeg;base64,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';

let user = JSON.parse(localStorage.getItem('user'));

let usersList = document.querySelector('.desc')
let pageName = document.getElementById('page-name');

pageName.innerText = user.name;

for (const userKey in user) {

    if (userKey === 'address') {
        let add = document.createElement('li');
        add.innerText = `${userKey}`;
        // add.style.textAlign = 'center';
        add.style.textTransform = 'uppercase';
        add.style.color = '#507299';
        usersList.append(add);
        for (const addressKey in user.address) {
            if (addressKey === 'geo') {
                let li = document.createElement('li');
                li.innerText = `${addressKey}`;
                // li.style.textAlign = 'center';
                li.style.textTransform = 'uppercase';
                li.style.color = '#507299';
                usersList.append(li);
                for (const geoKey in user.address.geo) {
                    let li = document.createElement('li');
                    li.innerText = `${geoKey}: ${user.address.geo[geoKey]}`;
                    usersList.appendChild(li);
                }
            } else {
                let li = document.createElement('li');
                li.innerText = `${addressKey}: ${user.address[addressKey]}`;
                usersList.appendChild(li);
            }
        }
        let contact = document.createElement('li');
        contact.innerText = `Contact`;
        // contact.style.textAlign = 'center';
        contact.style.textTransform = 'uppercase';
        contact.style.color = '#507299';
        usersList.append(contact);
    } else if (userKey === 'company') {
        let li = document.createElement('li');
        li.innerText = `${userKey}`;
        // li.style.textAlign = 'center';
        li.style.textTransform = 'uppercase';
        li.style.color = '#507299';
        usersList.append(li);
        for (const compKey in user.company) {
            let li = document.createElement('li');
            li.innerText = `${compKey}: ${user.company[compKey]}`;
            usersList.appendChild(li);
        }
    } else {
        let li = document.createElement('li');
        li.innerText = `${userKey}: ${user[userKey]}`;
        usersList.appendChild(li);
    }


}

let showPosts = document.querySelector('.btn');
showPosts.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {

            let divPosts = document.querySelector('.posts');

            for (const post of posts) {
                let postDiv = document.createElement('div');

                let userPhoto = document.createElement('div');
                let img = document.createElement('img');

                let postDesc = document.createElement('div');
                let h3 = document.createElement('h3');
                let h2 = document.createElement('h2');
                let postDetails = document.createElement('a');

                postDiv.classList.add('post');

                userPhoto.classList.add('user_photo');
                img.src = photoLink;

                postDesc.classList.add('post_desc');

                h3.innerText = user.name;
                h2.innerText = post.title;

                postDetails.innerText = 'Переглянути';
                postDetails.href = 'post-details.html';
                postDetails.onclick = () => {
                    localStorage.setItem('post',JSON.stringify(post));
                };

                userPhoto.append(img);
                postDesc.append(h3,h2,postDetails);
                postDiv.append(userPhoto,postDesc);
                divPosts.append(postDiv)

            }
        })
};