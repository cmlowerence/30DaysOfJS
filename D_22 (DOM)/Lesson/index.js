// Day - 22 : Manipulating DOM Object - Day 2
const credentials = {
    Author: 'Chudamani',
    Topic: 'Document Object Model (DOM) - Day 2',
    startDate: '08/10/2023',
    endDate: '09/10/2023'
}

console.log(credentials.Topic);
const body = document.querySelector('body');
// Creating an Element

/*
To create an HTML element we use tag name. creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.

syntax:
    document.createElement('tagname');
*/
{
    let title = document.createElement('h1');
    title.className = 'title';
    title.style.fontSize = '24px';
    title.textContent = 'Creating HTML element DOM Day 2';
    // console.log(title);
}



// Creating elements

/*
To create multiple elements we should use loop. Using loop we can create as many HTML elements as we ant. After we create the element we can assign value to the different properties of the HTML object.
*/
{
    let title;
    for (let i=0;i<3;i++){
        title = document.createElement('h1');
        title.className = 'title';
        title.style.fontSize = '24px';
        title.textContent = i;
    }
}


// Appending child to a parent element
/*
To see a created element on the HTML document, we should append it to the parent as a child element. We can access the HTML document body using 'document.body'. The 'document.body' supports the appendChild() method 
*/

{
    let title;
    for (let i=0;i<3;i++){
        title = document.createElement('h1');
        title.className = 'title';
        title.style.fontSize = '24px';
        title.textContent = i+1;
        document.body.appendChild(title)
    }
}

// Removing a child from a parent node

/*
After creating an HTML, we may want to remove element or elements and we can use removeChild() method.
*/
{
    // const list = document.querySelector('ul');
    // const items = document.querySelectorAll('li');
    // for (const item of items){
    //     list.removeChild(item)
    // }
}

// There is a better way to remove all elements from a parent element as: 
{
    const list = document.querySelector('ul');
    list.innerHTML = '';
}

