const credentials = {
    Author: 'Chudamani',
    Topic: 'Document Object Model (DOM) - Day 2',
    startDate: '09/10/2023',
    endDate: '09/10/2023'
}
const Q_1 = `Create a div container on HTML document and create 0 to 100 numbers dynamically and append to the container div.
=> Even numbers background is green
=> Odd numbers background is yellow
=> Prime numbers background is red`
console.log('%cmain.js line:11 Q_1', 'color: white; background-color: #007acc;', Q_1);

const authDiv = document.querySelector('#authorDetail');
authDiv.textContent = `Author: ${credentials.Author}`;

// subHeading Style
{
    const style = document.querySelector('h2').style;
    style.fontSize = '1rem';
    style.fontWeight = '500';
    style.textDecoration = 'underline';
    style.marginBlock = '.7rem';
    style.color = '#4c4c4'
}
// authDiv Style
{
    const style = authDiv.style;
    style.fontSize = '.875rem';
    style.color = '#3c3c3c'
    style.marginBlock = '.5rem'
}

// Functions

const isEven = (num) => {
    if (num % 2 == 0) return true
    else return false
}
const isOdd = (num) => {
    if (!(num % 2 == 0)) return true
    else return false
}
const isPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}



const container = document.createElement('div');
let element;
for (let i = 0; i <= 101; i++) {
    element = document.createElement('span');
    element.textContent = i;
    container.appendChild(element)
}
document.body.appendChild(container)


// container style
{
    const style = container.style;
    style.maxWidth = '80%';
    style.display = 'grid';
    style.gridTemplateColumns = 'repeat(6,1fr)';
    style.gap = '.2rem';
    style.justifyContent = 'center';
    style.alignItems = 'center'
    style.textAlign = 'center'
}

// Container child Styles
{
    container.childNodes.forEach((e, i) => {
        let innerContent = parseInt(e.textContent);
        const style = e.style;
        style.paddingBlock = '.275rem';
        style.paddingInline = '1.2rem';
        style.color = '#fff';
        style.fontSize = '1.125rem';
        style.fontWeight = '600';
        if (isPrime(innerContent)) {
            style.backgroundColor = '#dc3545'
        }else if (isOdd(innerContent)){
            style.backgroundColor = '#ffc107'
        }else if (isEven(innerContent)){
            style.backgroundColor = '#198754'
        }
    })
}


/*
red = #dc3545
yellow = #ffc107
green = #198754

*/