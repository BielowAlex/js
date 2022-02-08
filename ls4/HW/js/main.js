// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square(a,b){
    return a*b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle(r){
    return 3.14*Math.pow(r,2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h,r){
    return 2*3.14*r*(h+r);
}

// - створити функцію яка приймає масив та виводить кожен його елемент

function showArray(arr){
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphCreator(text){
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(text){
    document.write(`<ul>`);
    let i=0;
    while (i<3){
        document.write(`<li>${text}</li>`);
        i++;
    }

    document.write(`</ul>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл);

function listElementCreator(text,num){
    document.write(`<ul>`);

    let i=0;
    while (i<num){
        document.write(`<li>${text}</li>`);
        i++;
    }

    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayToList(arr){
    document.write(`<ul>`);

    let i=0;
    while (i<arr.length){
        document.write(`<li>${arr[i]}</li>`);
        i++;
    }

    document.write(`</ul>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function showObjects(arr){
    let i = 0;
    while (i<arr.length){
        document.write(`
        <div class="object_${i}">
            ${arr[i].id} - ${arr[i].name} - ${arr[i].age}
        </div>`);
    }
}