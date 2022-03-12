// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {


        for (const user of users) {
            let usersInter = document.createElement('div');
            let usersList = document.createElement('ul');

            usersInter.classList.add('user_int');
            usersList.classList.add('user_list');

            for (const userKey in user) {

                if (userKey === 'address') {
                    let add = document.createElement('li');
                    add.innerText = `${userKey}`;
                    add.style.textAlign = 'center';
                    add.style.textTransform = 'uppercase';
                    usersList.append(add);
                    for (const addressKey in user.address) {
                        if (addressKey === 'geo') {
                            let li = document.createElement('li');
                            li.innerText = `${addressKey}`;
                            li.style.textAlign = 'center';
                            li.style.textTransform = 'uppercase';
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
                    contact.style.textAlign = 'center';
                    contact.style.textTransform = 'uppercase';
                    usersList.append(contact);
                } else if (userKey === 'company') {
                    let li = document.createElement('li');
                    li.innerText = `${userKey}`;
                    li.style.textAlign = 'center';
                    li.style.textTransform = 'uppercase';
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
            let btnShowPosts = document.createElement('button');
            btnShowPosts.innerText = 'Show user Posts';


            btnShowPosts.onclick = show;

            function show() {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(posts => {

                        for (const post of posts) {
                            let divPost = document.createElement('div')
                            divPost.classList.add('post');

                            let btnComment = document.createElement('button');
                            btnComment.innerText = 'Show Comment';

                            btnComment.onclick = function () {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(value => value.json())
                                    .then(comments => {
                                        btnComment.disabled = true;
                                        for (const comment of comments) {
                                            let divComment = document.createElement('div')
                                            divComment.classList.add('comment');

                                            let user = document.createElement('div');
                                            user.classList.add('user')
                                            if (comment.postId === post.id) {
                                                for (const commentKey in comment) {

                                                    if ((commentKey === 'name') || (commentKey === 'id') || (commentKey === 'email')) {
                                                        let el = document.createElement('h3');
                                                        el.innerHTML = `${commentKey}: ${comment[commentKey]}`;

                                                        user.appendChild(el);
                                                        divComment.appendChild(user);

                                                    } else if (commentKey === 'body') {
                                                        let el = document.createElement('p');
                                                        el.classList.add('el');
                                                        el.innerHTML = `${comment[commentKey]} `;

                                                        divComment.appendChild(el);
                                                    }

                                                }
                                                divPost.appendChild(divComment)
                                            }
                                        }

                                    });
                            }
                            if (post.userId === user.id) {
                                for (const postKey in post) {

                                    if ((postKey === 'title') || (postKey === 'id') || (postKey === 'userId')) {
                                        if (postKey === 'title') {
                                            let el = document.createElement('h2');
                                            el.classList.add('el');
                                            el.classList.add('to_upper');
                                            el.innerHTML = ` ${post[postKey]} `;
                                            divPost.appendChild(el);
                                        } else {
                                            let el = document.createElement('h2');
                                            el.classList.add('el');
                                            el.innerHTML = `${postKey}: ${post[postKey]} `;
                                            divPost.appendChild(el);
                                        }
                                    } else {
                                        let el = document.createElement('p');
                                        el.classList.add('el');
                                        el.innerHTML = `${post[postKey]} `;
                                        divPost.appendChild(el);
                                    }

                                }

                            divPost.appendChild(btnComment)
                            usersInter.appendChild(divPost)
                            }
                        }

                    });
            }

            usersInter.append(usersList);
            usersInter.append(btnShowPosts);
            document.body.append(usersInter)

        }


    })



