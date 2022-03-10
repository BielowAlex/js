// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


let body = document.body;
// body.onclick = function (e){
//     let block = e.target;
//     console.log("Tag name:" + block.tagName);
//     let listClass =block.classList;
//     console.log("Class list:")
//     for (const el of listClass) {
//         console.log("-"+el);
//     }
//     console.log("Block id:" + block.id);
//     console.log("Block size:" + block.offsetHeight + "X" + block.offsetWidth)
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let id = 0;
// body.onclick = function (e){
//
//     let popup = document.getElementById('popup');
//     if(id==0){
//         popup.classList.add('show');
//         let ul = document.createElement('ul');
//         let block = e.target;
//
//         let tag = document.createElement('li');
//         tag.innerText = "Tag name:" + block.tagName;
//         ul.append(tag);
//
//         let listClass =block.classList;
//         for (const el of listClass) {
//             let clas = document.createElement('li');
//             clas.innerText = "class - "+el;
//             ul.append(clas);
//         }
//
//         let tagId = document.createElement('li');
//         tagId.innerText = "Block id:" + block.id;
//         ul.append(tagId);
//
//         let size = document.createElement('li');
//         size.innerText = "Block size:" + block.offsetHeight + "X" + block.offsetWidth;
//         ul.append(size);
//
//         popup.append(ul);
//         id++;
//     }else{
//         popup.classList.remove('show');
//         id--;
//         popup.children[0].remove()
//     }
//
//
// }


let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе
// так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let status = document.getElementById('status');
let age = document.getElementById('age');
let city = document.getElementById('city');

status.onclick = function () {
    let arr = [];
    if (status.checked) {
        arr = usersWithAddress.filter(v => !v.status)
        console.log(arr);
    } else {
        arr = usersWithAddress.filter(v => v.status)
        console.log(arr);
    }
}

age.onclick = function () {
    let arr = [];
    if (age.checked) {
        arr = usersWithAddress.filter(val => val.age > +29)
        console.log(arr);
    } else {
        arr = usersWithAddress.filter(val => val.age <= 29)
        console.log(arr);
    }
}

city.onclick = function () {
    let arr = [];
    if (city.checked) {
        arr = usersWithAddress.filter(val => val.address.city == 'Kyiv')
        console.log(arr);
    } else {
        arr = usersWithAddress.filter(val => val.address.city != 'Kyiv')
        console.log(arr);
    }
}

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети,
// то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
// лежащему с ним на одном уровне
// let i = 0;
// let next = document.createElement('button');
// next.innerText = 'next';
// let back = document.createElement('button');
// back.innerText = 'back'
// document.body.append(next, back);
// function moveTo(element, list) {
//     let children = element.children;
//     console.log(children);
//     console.log(element)
//
//     next.onclick = function () {
//
//         if(children.length > 0){
//             moveTo(children[i],list);
//         }else if (children.length == 0) {
//             i++;
//             moveTo(list[i], list);
//         }
//     }
// }
//
// moveTo(document.body, document.body.children)


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let imgList = document.getElementById('imgList').children;
let next = document.getElementById('next');
let previous = document.getElementById('previous');
previous.disabled = true;
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');

console.log(imgList);

imgList[2].classList.add('left');
imgList[1].classList.add('left');

l1.classList.add('grey');
l2.classList.add('silver');
l3.classList.add('silver');

next.onclick = function (){
    if(l1.classList[0] == 'grey'){

        imgList[0].classList.add('left');
        imgList[1].classList.remove('left');

        l1.classList.remove('grey');
        l1.classList.add('silver');
        l2.classList.add('grey');
        l2.classList.remove('silver');

        previous.disabled = false;

    }else if(l2.classList[0] == 'grey'){

        imgList[1].classList.add('left');
        imgList[2].classList.remove('left');

        l2.classList.remove('grey');
        l2.classList.add('silver');
        l3.classList.add('grey');
        l3.classList.remove('silver');

        next.disabled= true;

    }
}
previous.onclick = function (){
    if(l3.classList[0] == 'grey'){

        imgList[2].classList.add('left');
        imgList[1].classList.remove('left');

        l2.classList.add('grey');
        l2.classList.remove('silver');
        l3.classList.add('silver');
        l3.classList.remove('grey');

        next.disabled = false;

    }else if(l2.classList[0] == 'grey'){

        imgList[1].classList.add('left');
        imgList[0].classList.remove('left');

        l1.classList.add('grey');
        l1.classList.remove('silver');
        l2.classList.remove('grey');
        l2.classList.add('silver');

        previous.disabled= true;

    }
}

//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділенні сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let b = document.getElementById('text');

b.onmouseover = function (){
    this.style.fontWeight = 'bold';
    b.onmouseleave = function (){
        this.style.fontWeight = 'normal';
    }
}


function setFuncForAll(element){
    let children = element.children;
    for (const child of children) {
        child.onmouseover = function (){
            this.style.fontWeight = 'bold';
            child.onmouseleave = function (){
                this.style.fontWeight = 'normal';
            }
        }
        setFuncForAll(child);
    }

}
setFuncForAll(document.body);