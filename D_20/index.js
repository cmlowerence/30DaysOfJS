// Day - 20 : Writing Clean codes
const credentials = {
    Author: 'Chudamani',
    Topic: 'Writing Clean Codes',
    startDate: '07/10/2023',
    endDate: ''
}

/*
=> Writing Clean code

A JavaScript style guide is a set guide is a set of standards that tells how JavaScript code should be written and organized.

JavaScript is a programming language and like human language it has syntax. The syntax of JavaScript has to be written following a certain style guideline for sake of convince and simplicity.

=> Why we need style guide

We have been coding alone for so long but now it seems to work in a team. It does not matter in anyway you write you code as long as it running, however when we work in team of 10 or 20 or more developer on one project and on the same code base, the code will e messy and hard to manage if there is no any guidelines to follow.

We can develop our own guidelines and conventions or you can also adapt well developed guidelines. Let us the most common know guidelines. Most common JavaScript Style Guides

    * Airbnb JavaScript Style Guide
    * JavaScript Standard Style Guide
    * Google JavaScript Style Guide
=> Airbnb JavaScript Style Guide

    Airbnb has one of the most popular JavaScript style guides on the internet. It covers nearly every aspect of JavaScript as well and it is adopted by any developer and companies. Visit Airbnb style at (https://github.com/airbnb/js).

=> Standard JavaScript Style Guide

    This is guideline is not as popular as Airbnb but it worth to look at it. They removed the semicolon in their style guide. (https://standardsjs.com/)


=> Google JavaScript Style Guide

    Visit https://google.github.io/styleguide/jsguide.html
*/
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
const { a, ...noA } = copy;
console.log(noA);
const myObj = {
    'name': 'Chudamani',
    'class': 'BEd'
}
let element = {
    0: 'One',
    1: 'Two',
    2: 'Three',
    3: 'Four'
}
// const length = Object.keys(element).length
// element = {
//     ...element,
//     length
// }



/*
=> JavaScript Coding conventions
    In this 30 Days of JavaScript we used the general JavaScript writing conventions and guides. Coding conventions are style guidelines for programming which are developed by an individual, a tem or a company

    * Coding Conventions helps:
        - to write clean code
        - to improve code readability
        - to improve code re-useability and maintainability
    
    * Coding conventions includes
        - Naming and declaration rules for variables
        - Naming and declaration rules for functions
        - Rules for the use of white space, indentations, and comments
        - Prog=ramming practices and principles

    * Conventions used in this Series
        In this challenge we follow the regular JavaScript convention but there are some other reference too:
            - We used camelCase for variables and functions
            - All variable names start with a letter
            - We choose to use const for constants, arrays, objects and functions.  Instead of double quote, we choose to use single quote or backtick. Single quote is becoming trendy.
            - Space around arithmetic operators, assignment operators and after comma
            - Arrow functions instead of function declaration
            - Explicit return instead of implicit return if the function is one liner
            - No trailing comma in the last value of an object
            - We prefer this +=, -=, *=, /=, **= instead of the longer version
            - When we use console.log(), it is good to print with a tag string to identify from where the console is coming
*/

// Variables
{
    let firstName = 'Chudamani';
    let lastName = 'Lawrence';
    let country = 'India';
    let city = 'Mandi';

    const PI = Math.PI;
    const gravity = 9.81;
}

/**
    Arrays
    We choose to make array name plural

    * names
    * numbers
    * countries
    * languages
    * skills
    * fruits
    * vegetables
 */
{
    // arrays
    const names = ['Chudamani', 'Rishi', 'Chopender', 'Virender'];
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
    const countries = ['India', 'America', 'Austria', 'Norway', 'Iceland', 'Russia'];
    const languages = ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu'];
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python'];
    const fruits = ['banana', 'orange', 'mango', 'lemon'];
    const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
}

// functions
/*
    By now we are very familiar function declaration, expression function, arrow function and anonymous function. In this challenge we tend to use arrow function instead of other functions. Arrow function is not a replacement for other functions. In addition, arrow functions and function declarations are not exactly the same. SO you should know when to use and when not. We will cover  the difference in detail in other section. We will use explicit return instead of implicit return if the function is one liner.
 */
{
    // function which returns full name of a person
    const printFullName = (firstName, lastName) => firstName + ' ' + lastName
    console.log(printFullName('Chudamani', 'Lawrence'));

    // function which calculates a square of a number
    const square = (n) => n * n
    console.log(square(98))

    // A function which generate random hexa color
    const hexaColor = () => {
        const str = '0123456789abcdef';
        let hexa = '#'
        let index;
        for (let i = 0; i < 6; i++) {
            index = Math.floor(Math.random() * str.length);
            hexa += str[index]
        }
        return hexa
    }
    console.log(hexaColor());

    // A function which shows data and time
    const showDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1 < 10) ? '0' + now.getMonth() + 1 : now.getMonth() + 1;
        const date = (now.getDate() < 10 ? '0' + now.getDate() : now.getDate);
        let hours = (now.getHours() <= 12) ? now.getHours() : now.getHours() - 12;
        let minutes = now.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        const dateMonthYear = date + '.' + month + '.' + year;
        let time = hours + ':' + minutes
        time = (now.getHours() < 12) ? time + ' AM' : time + ' PM'
        const fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
    console.log(showDateTime());
    console.log(new Date().toLocaleString());
}

// Loops
/**
 * We convert many types of loops in this challenges. The regular for loop, while loop, do while loop, for of loop, forEach loop and for in loop. Lets see how we use them:
 */
{
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    // Declaring an array variable
    const names = ['Chudamani', 'Rishi', 'Virender', 'Chopender', 'Bhoj Raj'];

    // iteration an array using regular for loop
    let len = names.length;
    for (let i = 0; i < len; i++) {
        console.log(names[i].toUpperCase())
    }

    // Iteration an array using for of loop
    for (const name of names) {
        console.log(name.toUpperCase());
    }

    // Iteration array using forEach loop
    (names.forEach(e => e.toUpperCase()));
    names

    const person = {
        firstName: 'Chudamani',
        lastName: 'Lawrence',
        age: 20,
        country: 'India',
        city: 'Mandi',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
        isMarried: false
    }

    // for of loop
    for (const key in person) {
        console.log(key)
    }
}

// Objects
/**
 * We declare oject literal with const
 */

{
    const person = {
        firstName: 'Chudamani',
        lastName: 'Lawrence',
        age: 20,
        country: 'India',
        city: 'Mandi',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
        isMarried: false
    }

    // Iterating through object keys
    for (const key in person) {
        console.log(key)
    }
}

// Conditional
// We say if, if else, if else if else, switch and ternary operators previous challenges

{
    // syntax
    let condition = true;
    if (condition) {
        // This part of code run for truthy condition
    } else {
        // This part of code run for false condition
    }

    // if else
    let num = 5;
    if (num > 0) {
        console.log(`${num} is a positive number`);
    } else {
        console.log(`${num} is a negative number`)
    }

    // if else if else if else
    let a = 0;
    if (a > 0) {
        console.log(`${a} is a positive number`)
    } else if (a < 0) {
        console.log(`${a} is a negative number`);
    } else if (a === 0) {
        console.log(`${a} is zero`)
    } else {
        console.log(`${a} is not a number`)
    }
}

// Switch Examples

{
    let dayUserInput = "Monday";
    let day = dayUserInput.toLowerCase();
    switch (day) {
        case 'monday':
            console.log('Today is Monday');
            break
        case 'tuesday':
            console.log('Today is Tuesday');
            break
        case 'wednesday':
            console.log('Today is Wednesday');
            break
        case 'thursday':
            console.log('Today is Thursday');
            break
        case 'Friday':
            console.log('Today is Friday');
            break
        case 'saturday':
            console.log('Today is Saturday');
            break
        case 'sunday':
            console.log('Today is Sunday');
            break
        default:
            console.log('It is not a weak day.')
    }
}

// ternary
{
    let isRaining = true;
    isRaining
        ? console.log('You need a rain coat')
        : console.log('No need for a rain coat.')
}

// Classes
// We declare class with CamelCase which starts with capital letter

// syntax
class ClassName {
    // code goes here
}

{
    // defining class
    class Person {
        constructor(firstName = 'John', lastName = 'Doe') {
            console.log(this) // checking output form here
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    console.log(new Person())
}