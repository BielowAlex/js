// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".

let circle = document.createElement('div');
circle.style.backgroundColor = 'black';
circle.style.borderRadius = "50%";
circle.style.width = '100px'
circle.style.height = '100px';
circle.style.color = 'white';
circle.innerText = '♥';
circle.style.textAlign = 'center';
circle.id = 'text';
circle.style.margin = '10px';
document.body.append(circle);
// console.log(circle.style);
circle.addEventListener('click',function (){
    circle.style.backgroundColor = 'red'
})
let hideBtn = document.createElement('button');
hideBtn.innerText = 'Hide circle';
hideBtn.style.margin = '15px';
document.body.append(hideBtn)
hideBtn.addEventListener('click',function (){

   let btn = document.getElementById('text');
    btn.style.display = 'none';

});


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hideMe = document.createElement('button');
hideMe.innerText = 'Hide me';
hideMe.style.margin = '15px';
document.body.append(hideMe);

hideMe.addEventListener('click',function (){
    hideMe.style.display = 'none';
})



// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// // та повідомити про це користувача

let checkBtn = document.getElementById('checkAge');
checkBtn.addEventListener('click',function (){
    let age = document.getElementById('age');
    if(age >= 18) {
        alert('Повнолітній');
    }else if (age<18 && age > 0){
        alert('Неповнолітній');
    }else {
    alert('Tи ще не народився');
    }
})

// - Создайте меню, которое раскрывается/сворачивается при клике

let showMenu = document.getElementById('burger');
let popup = document.getElementById('popup');

showMenu.addEventListener('click', function (){
    let classList = popup.classList;
    let id = 0;
    for (const clas of classList) {
        console.log(clas);
        if(clas == 'show') {
            id++;
        }

    }
   if(id==0) {
       popup.classList.add('show');
       showMenu.classList.add('anim');
   }else{
       popup.classList.remove('show');
       showMenu.classList.remove('anim');
   }

})

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let wrap = document.createElement('div');
let id = 0;
let comments = [{title : 'lorem', body:'lorem ipsum dolo sit ameti'},{title : 'lorem', body:'lorem ipsum dolo sit ameti'},{title : 'lorem', body:'lorem ipsum dolo sit ameti'}];
for (const comment of comments) {
let div = document.createElement('div');
id++;
div.style.width = '100%';
div.style.border = '1px solid black';
div.style.padding = '20px';
div.id = id.toString();
div.innerHTML = `
<h2>${comment.title}</h2>
<p>${comment.body}</p>
`
let btn = document.createElement("button");
btn.innerText = 'Hide Comment';
btn.addEventListener('click',function (){
    div.style.display = 'none';
});
div.append(btn);
document.body.append(div);
}
