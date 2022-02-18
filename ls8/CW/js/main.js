// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
//
// let main = document.getElementById('main_header');
// main.className = 'dec-2021';
//
// // b) робить шириниу елементу ul 400px
//
// let ul = document.getElementsByTagName('ul');
// ul[0].style.width = '400px';
//
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkList = document.getElementsByClassName('linkList');
// console.log(linkList)
// for (const linkListElement of linkList) {
//     linkListElement.style.width = '50%';
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
//
// let str = prompt('Текст для елементів з класом ListElement2:');
// let le2 = document.getElementsByClassName('listElement2');
// console.log(le2)
// for (const e of le2) {
//     e.innerHTML = `<a href="#"> ${str} </a> `;
// }
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let li = document.getElementsByTagName("li");
// for (const liElement of li) {
//     liElement.style.backgroundColor = "silver";
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
//
// let a = document.getElementsByTagName("a");
// for (const aElement of a) {
//     aElement.className = 'anchor';
// }
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (const aElement of a) {
//     if(aElement.textContent==='link3'){
//         aElement.style.width = '40px';
//     }
// }
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// for (const aElement of a) {
//     aElement.className = `element_${aElement.textContent}`;
// }
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let subHeader = document.getElementsByClassName('sub-header');
// let color = prompt("Подай кролір фону елементу sub header");
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = color;
// }
//
// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//
// color = prompt('Подай колір тексту елементу sub header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.color = color;
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content = document.getElementsByClassName('content_1');
console.log(content)
for (const contentElement of content) {
    contentElement.innerHTML = `<p>${prompt('Введіть текст')}</p>`
}

// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');
for (let pElement of p) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2=document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerHTML = 'dec-2021';
}
//