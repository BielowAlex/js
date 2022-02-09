// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою

let squareRectangle = (a,b)=>a*b;
console.log(squareRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола

let squareCircle = (r)=>3.14*Math.pow(r,2);
console.log(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру

let squareCylinder = (r,h)=>2*3.14*r*(r+h);
console.log(squareCylinder(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let getArray = (arr)=>{
    for (let e of arr) {
        console.log(e);
    }
};
arr1 = [1,2,3,4,5];

console.log(getArray(arr1));

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let createParagraph = (text)=>{
    document.write(`<p>${text}</p>`);
};
createParagraph("HELLO OKTEN");


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createList = (text)=>{
    document.write(`<ul>`);
    let i = 0;
    while(i<3){
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write(`</ul>`);
};

createList("I LOVE JS ♥");
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createFixedList = (Num,text)=>{
    document.write(`<ul>`);
    let i = 0;
    while(i<Num){
        document.write(`<li>${text}</li>`);
        i++;
    }
    document.write(`</ul>`);
};

createFixedList(5,"And i like HTML/CSS ♥");

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createListFromArray = (arr)=>{
    document.write(`<ul>`);
    for (let e of arr) {
        document.write(`<li>${e}</li>`);
    }
    document.write(`</ul>`);
}
createListFromArray(arr1);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let createListFromObj = (obj)=>{
    let i = 0;
    while (i<obj.length) {
        document.write(`<div>ID:${obj[i].id} - Name:${obj[i].name} - Age:${obj[i].age};</div>`);
        i++;
    }
}
let ObjArr = [
    {id:0,name:'Alex',age:20},
    {id:1,name:'Zhenia',age:19},
    {id:2,name:'Oleg',age:21},
    {id:3,name:'Tania',age:20},
];

createListFromObj(ObjArr);
