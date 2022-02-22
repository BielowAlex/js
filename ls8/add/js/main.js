// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let classList = [];

function getAllClass(element, list){
    let children = element.children;
    for (const child of children) {

        for (const classE of child.classList) {
                list.push(classE);
        }
        getAllClass(child,list);
    }

}
getAllClass(document.body,classList)
console.log(classList);