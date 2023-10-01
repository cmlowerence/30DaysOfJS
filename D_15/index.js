//  D_15: Classes in javaScript
/* 
    JavaScript is an object oriented programming language. Everything in JavaScript is an object, with its properties and methods. We create class to create an object. A Class is like an object constructor, or a "blueprint" for creating objects. We instantiate a class to create an object. The class defines attributes and the behaviour of the object, while the object, on the other hand, represents the class.

    Once we create a class we can create object from it whenever we want. Creating an object from a class is called class instantiation.

    In the object section, we saw how to create an object literal. Object literal is a singleton. If we want to get a similar object, we have to write it. However, class allows to create many objects. This helps to reduce amount of code and repetition of code.
*/

// Defining Classes
// To define a class in JavaScript we need the keyword class, the name of a class in CamelCase and block code (two curly brackets). Let us create a class name Person.
/* Syntax
    class ClassName {
        // code goes here
    }
*/
class Person {
    // code goes here
}

// Class instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

// Let create a "dog" object from out Person class
{
    class Person{
        // Our code here
    }
    
    const person = new Person();
    console.log(person)
    // since our class is empty now, the person object is also empty
}

// Class Constructor
// The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the 'this' keyword to attach the constructor parameters with class.
{
    class Person {
        constructor(firstName,lastName){
            console.log(this) //Check the output from here
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const person = new Person()
    console.log(person)

    // Since no value of firstName and lastName are given, both the values of object person will be undefined
    // let us give the value in it
    {
        class Person{
            constructor(firstName,lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        const person1 = new Person('Chudamani','Lawrence');
        console.log(person1)
        // We can create multiple objects using Person class as:
        const person2 = new Person('Rishi','Rathur');
        const person3 = new Person('Virender','Thakur');
        console.log(person2,person3)

        // Let us add more properties to our class`
        {
            class Person{
                constructor(firstName,lastName,age,country,city){
                    console.log(this);
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                }
            }

            const person = new Person('Chudamani','Lawrence',20,'India','Mandi');
            console.log(person)
        }
    }
}

// Default values with constructor`
{
    class Person{
        constructor(
            firstName = 'Chudamani',
            lastName = 'Lawrence',
            age = 20,
            country = 'India',
            city = 'Mandi'
        ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
        }
    }
    const person = new Person() // It will create object with default values
    const person1 = new Person('Rishi','Rathour',20,'India','Mandi'); // this will create object person1 with given values in args
    console.log(person);
    console.log(person1);
}
