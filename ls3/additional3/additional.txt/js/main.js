// 1. Створити пустий масив та :
let arr = [];

function getRandNumPos() {
    let i;
    while (true) {
        i = Math.floor(Math.random() * 11);
        if (i % 2 === 0 && i !== 0) {
            break;
        }
    }
    return i;
}

function getRandNumNeg() {
    let i;
    while (true) {
        i = Math.floor(Math.random() * 51);
        if (i % 2 === 0 && i !== 0) {
            break;
        }
    }
    return i;
}

//     a. заповнити його 50 парними числами за допомоги циклу.

// for(let i = 0; i<50;i++){
//     arr[i] = getRandNumPos();
// }
//
// //     b. заповнити його 50 непарними числами за допомоги циклу.
// for(let i = 0; i<50;i++){
//     arr[i] = getRandNumNeg();
// }
// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for(let i = 0;i<20;i++){
//     arr[i] = Math.floor(Math.random()*21)
// }
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8)) + 8;
// }
//
// // 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr2 = [];
// let j = 0;
// for (let i = 0; i < 20; i++) {
//     if (i % 2 !== 0) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//             arr2[j] = arr[i];
//             j++;
//         }
//     }
// }
// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// for (let i = 0; i < 20; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr3 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for(let i=0;i<arr3.length;i++){
//     if(arr3[i]===1 || arr3[i]===9 || arr3[i]===56){
//         console.log(arr3[i]);
//     }
// }
// // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr4 = [100,250,50,168,120,345,188];
// let sum = 0;
// for(let i=0;i<arr4.length;i++){
//     sum+=arr4[i];
// }
// console.log(sum/arr4.length);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr5 = [100,250,50,168,120,345,188];
// let newArr = [];
// for(let i=0;i<arr5.length;i++){
//     newArr[i]=arr5[i]*5;
// }


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
// - додати його в інший масив.
// let arr6 = [100,"lol",50,"kek",120,"oru",188];
// let newArr = [];
// for(let i=0;i<arr6.length;i++){
//     if(typeof arr6 === "number") {
//         newArr[i] = arr6[i];
//     }
// }
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// let usersWithCities = [];
// for(let i = 0;i<usersWithId.length;i++){
//     usersWithCities[i]={
//         id:usersWithId[i].id,
//         name:usersWithId[i].name,
//         age:usersWithId[i].age,
//         status:usersWithId[i].status,
//         address:{ }
//     }
//     let j = 0
//     for(j;j<citiesWithId.length;j++){
//         if(citiesWithId[j].user_id===usersWithId[i].id){
//             usersWithCities[i].address=citiesWithId[j];
//         }
//     }
// }
//
// console.log(usersWithCities);
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numbers= [ 1, 2, 3, 5, 7, 9, 56, 8, 67,13 ];
// for(let i = 0;i<numbers.length;i++){
//     if(numbers[i]%2===0){
//         console.log(numbers[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67,13 ];
// let emptyArr = [];
// for(let i = 0;i<numbers.length;i++){
//     emptyArr[i]=numbers[i];
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = ['a','b','c'];
// let str = '';
// for(let i = 0;i<abc.length;i++){
//     str += abc[i];
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = ['a','b','c'];
// let str = '';
// let i = 0;
// while(i<abc.length){
//     str += abc[i];
//     i++;
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc = ['a','b','c'];
let str = '';
for (let e of abc) {
    str+=e;
}
console.log(str);