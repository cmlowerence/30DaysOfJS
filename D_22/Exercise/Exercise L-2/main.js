const credentials = {
    Author: 'Chudamani',
    Topic: 'Document Object Model (DOM) - Day 2',
    startDate: '09/10/2023',
    endDate: '/10/2023'
}
console.log(credentials)
const Q_1 = 'Use the countries array to display all the countries.';
console.log('%cmain.js line:9 Q_1', 'color: white; background-color: #007acc;', Q_1);


const mainHeading = document.querySelector('h1');
const subHeading = document.querySelector('#subHeading');
const title = document.querySelector('#title');
const author  = document.querySelector('#author');
const container = document.querySelector('.container');
const totalCountries = countries.length;

// Main heading 
{
    // styles
    {
        const style = mainHeading.style;
        style.letterSpacing = '.4rem';
        style.wordSpacing = '.6rem'
    }
}

// subHeading 

{
    subHeading.textContent += totalCountries;
    // styles
    {
        const style = subHeading.style;
        style.fontSize = '1rem';
        style.marginBlock = '.4rem';
    }
}

// title 
{
    // styles
    {
        const style = title.style;
        style.fontSize = '1rem';
        style.fontWeight = '500';
        style.textDecoration = 'underline';
        style.marginBlock = '.3rem';
    }
}

// Author 
{
    author.textContent += credentials.Author;
    // styles
    {
        const style = author.style;
        style.fontSize = '.885rem';
        style.fontWeight = '500';
    }
}

// Container
{
    let element;
    for (let i=0;i<countries.length;i++){
        element = document.createElement('span');
        element.textContent = countries[i];
        container.appendChild(element);
    }
    // styles container
    {
        const style = container.style;
        style.display = 'grid';
        style.gridTemplateColumns = 'repeat(6, 1fr)';
        style.width = '80%'
        style.fontSize = '.625rem';
        style.textAlign = 'center';
        style.marginBlock = '1rem';
        style.gap = '.3rem'
    }

    // style elements
    {
        container.childNodes.forEach(e=>{
            let style = e.style;
            style.border = '1.8px solid #8c8c8c';
            style.aspectRatio = '1';
            style.borderRadius = '.5rem';
            style.display = 'flex';
            style.justifyContent = 'center';
            style.alignItems = 'center';
            style.fontWeight = '600';
            style.padding = '.4rem'
            style.cursor = 'pointer';

        })
    }
}


