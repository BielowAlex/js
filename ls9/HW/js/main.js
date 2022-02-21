// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'Black';
block.style.color = 'White';
block.style.fontSize = '30px';
block.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus est ipsum iure molestias omnis quia 
reprehenderit voluptas. Architecto aut consectetur dolore eaque nobis nostrum voluptatum. Amet natus nesciunt quae repellat?</p>`
document.body.appendChild(block);
let blockClone = block.cloneNode(true);
document.body.appendChild(blockClone);

// - Є масив:
 let arr = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let ul = document.getElementsByTagName('ul')[0];
console.log(ul);
// for (const e of arr) {
//     ul.innerHTML +=`
//     <li>${e}</li>`
// }
for (const e of arr) {
    let str = document.createElement('li');
    str.innerText = e;
    ul.appendChild(str);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for (const e of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = cut(e);
//     div.appendChild(h2);
//     document.body.appendChild(div);
// }
// function cut(arr){
//     let {title,monthDuration} = arr ;
//     let string = title + ' - ' + monthDuration
//     return string;
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

for (const e of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h2 = document.createElement('h2');
    h2.classList.add('heading');
    let p = document.createElement('p');
    p.classList.add('description');
    h2.innerText = e.title;
    p.innerText = e.monthDuration;
    div.append(h2,p);
    document.body.appendChild(div);
}