// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
// на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let infoBtn = document.getElementById('getInfo');

infoBtn.addEventListener('click',function (e){

    let f1 = document.forms[0];
    let f2 = document.forms[1];

    console.log(f1[0].value);
    console.log(f1[1].value);
    console.log(f2[0].value);
    console.log(f2[1].value);

})

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let f3 = document.forms[2];
f3.onsubmit = function (e){
    e.preventDefault();
    let trNum = e.target.numsTr.value;
    let thNum = e.target.numsTh.value;
    let val = e.target.val.value;
    let table = document.createElement('table');
    for (let i = 0; i < trNum; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < thNum; j++) {
            let th = document.createElement('th');
            th.innerText = val;
            tr.append(th);
        }
        table.append(tr);
    }
    document.body.append(table);
}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badBoy = ["пиздеж",'пизда','бля','блядина','блядистка','блядища','блядки',
    'блядовать','блядовитый','блядовозка','блядский','блядство',
    'блядун','блядь','блядюга','бляха','вздрючить','взъебать','пизда',
    'въебать','выблядок','выебанный','выебать','выебнуться','выебоны',
    'выебосы','выёбисто','выёбистый','выёбываться','глухуеватый','долбоёб',
    'допиздеться',"ебало",'ебальник','ебанутый','ебануть','ебануться','ебать']
let f4 = document.forms[3];
// f4.onsubmit = function (e){
//     e.preventDefault();
//     let str = e.target.words.value.toLowerCase();
//     for (const word of badBoy) {
//         if(word==str){
//             alert('Погане слово');
//         }
//     }
// }
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

f4.onsubmit = function (e){
    e.preventDefault();
    let str = e.target.words.value.toLowerCase();
    for (const word of badBoy) {
        let words = str.split(' ');
        for (const word1 of words) {
            if(word1 == word){
                alert('Плохое слово');
            }
        }

    }
}
