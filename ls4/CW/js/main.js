// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minInt(a,b,c){
    if(a<b && a<c){
        return a;
    }else if(b<c && b<a){
        return b;
    }else if(c<b && c<a){
        return c;
    }else{
        console.log("Все числа равны.");
        return a;
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxInt(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>c && b>a){
        return b;
    }else if(c>b && c>a){
        return c;
    }else{
        console.log("Все числа равны.");
        return a;
    }
}
// - створити функцію яка повертає найбільше число з масиву

let arr = [1,3,4,5,6,1,123,2,54,343,5,1,-2];

function maxIntFromArr(arr){
    let i = 1;
    let max;
    while (i<arr.length){
        if(arr[i]>arr[i-1]){
            max = arr[i];
        }
        i++;
    }
    return max;
}

console.log(maxIntFromArr(arr));
// - створити функцію яка повертає найменьше число з масиву
function minIntFromArr(arr){
    let i = 1;
    let min = arr[0];
    while (i<arr.length){
        if(arr[i]<min){
            min = arr[i];
        }
        i++;
    }
    return min;
}

console.log(minIntFromArr(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumArrElement(arr){
    let i = 0;
    let sum = 0;
    while (i<arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arithmeticMean(arr){
    let i = 0;
    let sum = 0;
    while (i<arr.length){
        sum += arr[i];
        i++;
    }
    return sum/arr.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function minMaxArr(...arr){
//     let i = 1;
//     let max = maxIntFromArr(arr);
//     console.log(max);
//     let min = minIntFromArr(arr);
//     return min;
//
// }
// OR
function minMaxArr(...arr){
    let i = 1;
    let max;
    let min = arr[0];
    while (i<arr.length){
        if(arr[i]>arr[i-1]){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        i++;
    }
    console.log(max);
    return min;

}

//..==============Не зрозумів на скільки елементів заповнювати масив в 1 завдання тому поєднав ці два завдання.==============..\\
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randElementsArr(arr,limit){
    for(let i = 0; i<limit;i++){
        arr[i] = Math.round(Math.random()*100);
    }
}
//..==============Не зрозумів на скільки елементів заповнювати масив в 1 завдання тому поєднав ці два завдання.==============..\\

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let x = [1,2,3];
let y = [];
function reverse(arr,newArr){
    let length = arr.length - 1;

    for (let arrElement of arr) {
        newArr[length] = arrElement;
        length--;
    }
}

reverse(x,y);
console.log(y);