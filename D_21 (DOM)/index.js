// Day - 21 : Document Object Model - Day 1
const credentials = {
    Author: 'Chudamani',
    Topic: 'Document Object Model (DOM)',
    startDate: '07/10/2023',
    endDate: '08/10/2023'
}

// Getting Element
/*
We can access already created elements or elements using JavaScript. To access or get elements, we use different methods. The code in index.html has four h1 elements. Let us see the different methods to access the h1 elements
*/

console.log('%c\n\nGetting an element by Tag Name\n', 'color: orange;font-size: 20px;')
// Getting elements by tag name
/* 
getElementByTagName() : takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.
*/

// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}

console.log('%c\n\nGetting an element by Class Name\n', 'color: orange;font-size: 20px;')
// Getting elements by class name

/*
getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collections. It is possible to loop through all the HTMLCollection elements.
*/

// syntax
document.getElementsByClassName('className');
{
    const allTitles = document.getElementsByClassName('title');
    console.log(allTitles)
    console.log(allTitles.length)
    for (let i = 0; i < allTitles.length; i++) {
        console.log(allTitles[i]);
    }

}
console.log('%c\n\nGetting an element by ID\n', 'color: orange;font-size: 20px;')
// Getting an element by ID
// getElementByID targets a single HTML element. We pass the id without # as an argument

// syntax
document.getElementById('id')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

console.log('%cGetting Elements by using querySelector & querySelectorAll method', 'color : orange; font-size : 20px')
// Getting elements by using querySelector methods

/*
The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

querySelector : can be used to select HTML element by its tag name, id or class. If multiple tag name are used, it selects only the first element
*/
{
    let firstTitle = document.querySelector('h1'); // Select the first available h1 element
    console.log(firstTitle)
    firstTitle = document.querySelector('#first-title'); // select id with first-title

    firstTitle = document.querySelector('.title'); // select the first available element with class title
}

/*
querySelectorAll can be used to select HTML elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach loop through each nodeList elements.
*/
{
    const allTitles = document.querySelectorAll('h1'); // Selects all available h1 elements in tha page
    console.log(allTitles)
    console.log(allTitles.length)
    for (let i = 0; i < allTitles.length; i++) {
        console.log(allTitles[i]);
    }

    allTitles.forEach(title => console.log(title))
    {
        const allTitle = document.querySelectorAll('.title'); // Selecting all available elements with 'title' class
        console.log('%cindex.js line:89 allTitle', 'color: white; background-color: #007acc;', allTitle);
    }
}

// Adding attribute
/*
 An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes : id, class, src, style href disabled, title, alt. Let us add class for the fourth title
*/
{
    const titles = document.querySelectorAll('h1')
    titles[3].className = 'title'
    titles[3].id = 'fourth-title'
}

// Adding attributes using setAttribute

// The setAttribute() method set any HTML attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

{
    const titles = document.querySelectorAll('h1');
    titles[3].setAttribute('class', 'title');
    titles[3].setAttribute('id', 'fourth-title');

    // Adding attribute without setAttribute
    // We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. FOr instance id and class

    titles[3].classList.add('title', 'header-title');

    // Removing class using remove
    // Similar to adding we can also remove class from an element. We can remove a specific class from an element.
    titles[3].classList.remove('title', 'header-title');
}

// Adding Tex to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or innerHTML

// Adding Text content using textContent
//=> The textContent property is used to add text to an HTML element.
{
    const titles = document.querySelectorAll('h1')
    titles[3].textContent = 'Fourth Title';
}

// Adding Text content using innerHTML

// => Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add the text or HTML element or elements as a child

// => Text content
{
    const titles = document.querySelectorAll('h1');
    titles[3].textContent = 'Fourth Title';
}
// => inner HTML
// We use innerHTML property when we like to replace or a completely new children content to a parent ele,ent. The value we assign is going to be a string of HTML elements

{
    const lists = `
    <li>30DaysOfJavaScript Challenge</li>
     <li>30DaysOfReact Challenge</li>
     <li>30DaysOfPython Challenge</li>
     <li>30DaysOfFullStack Challenge</li>
     <li>30DaysOfMongoDB Challenge</li>
     <li>30DaysOfMachineLearning Challenge</li>
     <li>30DaysOfReactNative Challenge</li>
    `;
    const ul = document.querySelector('ul');
    ul.innerHTML = lists
}

// The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild() we can do it by doing this:
{
    const ul = document.querySelector('ul');
    ul.innerHTML = ''
}

// Adding style

// => Adding Style color
/**
 * Let us add some style to our titles. If the element has even index we give it green color else red
 */
{
    const titles = document.querySelectorAll('h1');
    titles.forEach((title, i) => {
        title.style.fontSize = '24px'; //All titles will be of 24 px font size

        if (i % 2 === 0) {
            title.style.color = 'green';
        } else {
            title.style.color = 'red';
        }
    })
}

// Adding Style Background Color
/** Let us add some style to our titles. If the element has even index, we'll give green color else red color */

{
    const titles = document.querySelectorAll('h1');
    titles.forEach((title, i) => {
        if (i % 2 === 0) {
            title.style.color = 'blue';
            title.style.backgroundColor = 'red';
        } else {
            title.style.color = 'blue';
            title.style.backgroundColor = 'green'
        }
    })
}

// adding Style Font size

// Let us add some style to or titles. If the element has even index, we give it 20px else 30px
{
    const titles = document.querySelectorAll('h1');
    titles.forEach((title, i) => {
        if (i % 2 === 0) {
            title.style.fontSize = '20px';
        } else {
            title.style.fontSize = '30px';
        }
    })
}

/** As we noticed, the properties of css when we use it in JavaScript, are going to be in camelCase. The following CSS properties change from background-color to backgroundColor, font-size to fontSize, font-family to fontFamily, margin-bottom to marginBottom etc. */