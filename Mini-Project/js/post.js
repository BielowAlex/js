let post = JSON.parse(localStorage.getItem('post'));
let posts = document.querySelector('.posts');
let commentsDiv = document.querySelector('.comments');


// console.log(post);

let postDiv = document.createElement('div');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let p = document.createElement('p');

postDiv.classList.add('post');
h2.innerText = post.title;
h3.innerText = `Post id:${post.id}; User id:${post.userId}`;
p.innerText = post.body;

postDiv.append(h2,h3,p);
posts.append(postDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {

        for (const comment of comments) {
            let divComment = document.createElement('div');
            let h2C = document.createElement('h2');
            let pC = document.createElement('p');

            divComment.classList.add('comment');
            h2C.innerText = comment.name;
            pC.innerText = comment.body;
            divComment.append(h2C,pC);
            commentsDiv.append(divComment)
        }
    })
