//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function fun(...arg){
    let concat = '';
    if(arg.length===1){
        console.log(arg[0]);
    }else if(arg.length>1){
        for (let argElement of arg) {
            concat += argElement;
        }
        console.log(concat);
    }
}

fun(1);
fun(1,2,3,4);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sum(arr1,arr2,newArr) {
    let i = 0;
    while (i<arr1.length){
        newArr[i]=arr1[i] + arr2[i];
        i++;
    }
    return newArr;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

console.log(Object.values(arr[0]));

function objectKey(arr){
    let newArr = [];
    let testArr = [];
    for (let i = 0; i<arr.length;i++) {
       testArr = Object.keys(arr[i]);
       for (let i = 0;i<testArr.length;i++){
           if(newArr.length>1){
               newArr[newArr.length] = testArr[i];
           } else {
               newArr[i] = testArr[i];
           }
       }
    }
    return newArr;
}

console.log(objectKey(arr));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function objectValues(arr){
    let newArr = [];
    let testArr = [];
    for (let i = 0; i<arr.length;i++) {
        testArr = Object.values(arr[i]);
        for (let i = 0;i<testArr.length;i++){
            if(newArr.length>1){
                newArr[newArr.length] = testArr[i];
            } else {
                newArr[i] = testArr[i];
            }
        }
    }
    return newArr;
}

console.log(objectValues(arr));
