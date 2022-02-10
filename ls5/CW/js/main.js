// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min = (a,b,c)=>{
    if(a<b && a<c){
        console.log(a);
    }else if(b<a && b<c){
        console.log(b);
    }else if(c<a && c<b){
        console.log(c);
    }
}
min(1,2,3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a,b,c)=>{
    if(a>b && a>c){
        console.log(a);
    }else if(b>a && b>c){
        console.log(b);
    }else if(c>a && c>b){
        console.log(c);
    }
}
max(1,2,3);

// - створити функцію яка повертає найбільше число з масиву

let maxFromArray = (arr)=> {
    let i=1;
    let max=arr[0];
    while(i<arr.length){
        if(arr[i]>max){
            max=arr[i];
        }
        i++;
    }
    return max;
}

let nums = [1,2,3,4,5,6,7,8,9];
console.log(maxFromArray(nums));

// - створити функцію яка повертає найменьше число з масиву
let minFromArray = (arr)=> {
    let i=1;
    let min=arr[0];
    while(i<arr.length){
        if(arr[i]<min){
            min=arr[i];
        }
        i++;
    }
    return min;
}


console.log(minFromArray(nums));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (arr)=>{
    let sum = 0;
    for (let e of arr) {
        sum +=e;
    }
    return sum;
}

console.log(sum(nums));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmeticMean = (arr)=>{
    let sum = 0;
    for (let e of arr) {
        sum +=e;
    }
    return sum/arr.length;
}
console.log(arithmeticMean(nums));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMaxFromArray = (arr)=> {
    let i=1;
    let res=arr[0];
    while(i<arr.length){
        if(arr[i]>res){
            res=arr[i];
        }
        i++;
    }
    console.log(res);
    res=arr[0];
    while(i<arr.length){
        if(arr[i]<res){
            res=arr[i];
        }
        i++;
    }
    return res;
}
console.log(minMaxFromArray(nums));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let newArr = [];

let arrRand = (arr,n)=>{
    let i = 0;
    while(i<n){
        arr[i] = Math.round(Math.random()*100);
        i++;
    }
    console.log(arr);
}
arrRand(newArr,10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

let arrRandLimit = (arr,n,limit)=>{
    let i = 0;
    while(i<n){
        arr[i] = Math.round(Math.random()*limit);
        i++;
    }
    console.log(arr);
}
arrRandLimit(newArr,10,10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr1 = [1,2,3];

let reverse = (arr)=>{
    let ri=arr.length-1;
    let newArr = [];
    for (let e of arr) {
        newArr[ri] = e;
        ri--;
    }
    return newArr
}
console.log(reverse(arr1));