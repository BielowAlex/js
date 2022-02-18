// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

console.log(document.getElementById('content').textContent);

// -- отримує текст з блоку з id "rules"

console.log(document.getElementById('rules').textContent)

// -- замініть текст параграфа з id 'content' на будь-який інший

let p  = document.getElementById('content');
p.innerText = 'Okten';
console.log(p.textContent);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let r  = document.getElementById('rules');
r.innerText = 'Web';
console.log(r.textContent);

// -- змініть кожному елементу колір фону на червоний

let body = document.body.children;
for (const bodyElement of body) {
    bodyElement.style.background = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const bodyElement of body) {
    bodyElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').getAttribute('class'));

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let rules = document.getElementsByClassName('fc_rules');
for (const rule of rules) {
    rule.style.color = 'red';
}