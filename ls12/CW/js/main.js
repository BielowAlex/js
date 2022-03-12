// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {

        for (const post of posts) {
            let divPost = document.createElement('div')
            divPost.classList.add('post');

            let btnComment = document.createElement('button');
            btnComment.innerText = 'Show Comment';

            btnComment.onclick =function() {
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
            document.body.appendChild(divPost)
        }

    });



