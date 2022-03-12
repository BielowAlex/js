const main = document.getElementsByClassName('main')[0];

const steeper = (domElement) => {
    domElement.classList.add('border')
    const border = document.createElement('span');
    const prev = document.createElement('button');
    prev.innerText = 'prev'
    const next = document.createElement('button');
    next.innerText = 'next'
    domElement.parentNode.appendChild(border);
    border.append(domElement);
    border.parentNode.append(prev, next)
    let nextCheck = true

    const steep = (list) => {
        let element;

        if (nextCheck) {
            element = list[0];
            while (element.firstElementChild) {
                element = element.firstElementChild
            }
        } else {
            element = list[list.length - 1];
        }

        element.style.backgroundColor = 'red'
        next.onclick = () => {
            nextCheck = true

            if (element.nextElementSibling) {
                element = element.nextElementSibling
                element.style.backgroundColor = 'red'
                element.previousElementSibling.style.backgroundColor = null;

                if (element.children.length) {
                    element.style.backgroundColor = null;

                    while (element.firstElementChild?.children.length) {
                        element = element.firstElementChild
                    }

                    steep(element.children);
                }
            } else {
                element.style.backgroundColor = null;
                while (!element.parentElement.nextElementSibling) {

                    if (element.parentElement.className.includes('border')) {

                        if (element.children.length) {
                            element = element.lastElementChild;
                        }

                        element.style.backgroundColor = 'red'
                        return
                    }

                    element = element.parentElement

                }
                element = element.parentElement.nextElementSibling
                element.style.backgroundColor = 'red'
            }
        }
        prev.onclick = () => {
            nextCheck = false

            if (element.previousElementSibling) {
                element = element.previousElementSibling
                element.style.backgroundColor = 'red'
                element.nextElementSibling.style.backgroundColor = null;

                if (element.children.length) {
                    element.style.backgroundColor = null;

                    while (element.lastElementChild?.children.length) {
                        element = element.lastElementChild
                    }

                    steep(element.children);
                }

            } else {
                element.style.backgroundColor = null;

                while (!element.parentElement.previousElementSibling) {

                    if (element.parentElement.className.includes('border')) {
                        while (element.firstElementChild) {
                            element = element.firstElementChild
                        }
                        element.style.backgroundColor = 'red'
                        return
                    }

                    element = element.parentElement
                }

                element = element.parentElement.previousElementSibling
                element.style.backgroundColor = 'red'
            }
        }
    }
    steep(domElement.children)
}
steeper(main)

