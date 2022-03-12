// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//
//         for (const post of posts) {
//             let divPost = document.createElement('div')
//             divPost.classList.add('post');
//             for (const postKey in post) {
//
//                 if ((postKey === 'title') || (postKey === 'id') || (postKey === 'userId')) {
//                     if (postKey === 'title') {
//                         let el = document.createElement('h2');
//                         el.classList.add('el');
//                         el.classList.add('to_upper');
//                         el.innerHTML = ` ${post[postKey]} `;
//                         divPost.appendChild(el);
//                     } else {
//                         let el = document.createElement('h2');
//                         el.classList.add('el');
//                         el.innerHTML = `${postKey}: ${post[postKey]} `;
//                         divPost.appendChild(el);
//                     }
//                 } else {
//                     let el = document.createElement('p');
//                     el.classList.add('el');
//                     el.innerHTML = `${post[postKey]} `;
//                     divPost.appendChild(el);
//                 }
//
//             }
//             document.body.appendChild(divPost)
//         }
//     });
//

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            let divComment = document.createElement('div')
            divComment.classList.add('comment');

            let user = document.createElement('div');
            user.classList.add('user')

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
            document.body.appendChild(divComment)
        }
    });