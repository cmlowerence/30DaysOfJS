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
    class Person {
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
        constructor(firstName, lastName) {
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
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        const person1 = new Person('Chudamani', 'Lawrence');
        console.log(person1)
        // We can create multiple objects using Person class as:
        const person2 = new Person('Rishi', 'Rathur');
        const person3 = new Person('Virender', 'Thakur');
        console.log(person2, person3)

        // Let us add more properties to our class`
        {
            class Person {
                constructor(firstName, lastName, age, country, city) {
                    console.log(this);
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                }
            }

            const person = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
            console.log(person)
        }
    }
}

// Default values with constructor`
{
    class Person {
        constructor(
            firstName = 'Chudamani',
            lastName = 'Lawrence',
            age = 20,
            country = 'India',
            city = 'Mandi'
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
        }
    }
    const person = new Person() // It will create object with default values
    const person1 = new Person('Rishi', 'Rathour', 20, 'India', 'Mandi'); // this will create object person1 with given values in args
    console.log(person);
    console.log(person1);
}

// Class methods
// The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create  some class methods
{
    class Person {
        constructor(
            firstName, lastName, age, country, city
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
        }
        getFullName() {
            const fullName = this.firstName + ' ' + this.lastName
            return fullName
        }
    }

    const person = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
    console.log(person.getFullName())


    // Properties with initial values
    /* When we create a class for some properties we may have an initial value. For instance if ou are playing a game, ou start score will be zero. So, we may have a starting score or score which is zero. In other way, we may hae an initial skill and we will acquire some skill after some time. */
    {
        class Person {
            constructor(firstName, lastName, age, country, city) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0; // Key with initial value
                this.skills = [] // Key with initial value
            }
            getFullName() {
                return `${this.firstName} ${this.lastName}`
            }
        }
        const person1 = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
        const person2 = new Person('Rishi', 'Rathour', 20, 'India', 'Mandi');

        console.log(person1.score);
        console.log(person2.score);
        console.log(person1.skills);
        console.log(person2.skills);
    }



    // A method could me regular method or a getter or a setter. Let us see, getter and setter.

    // 'getter' method
    {
        class Person {
            constructor(firstName, lastName, age, country, city) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0;
                this.skills = [];
            }
            getFullName() {
                return `${this.firstName} ${this.lastName}`
            }

            // getter method
            get getScore() {
                return this.score;
            }
            get getSkills() {
                return this.skills;
            }
        }
        const person1 = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
        const person2 = new Person('Rishi', 'Rathour', 20, 'India', 'Mandi');

        console.log(person1.getScore); // We do not require parenthesis to call a getter method
        console.log(person2.getScore);

        console.log(person1.getSkills);
        console.log(person2.getSkills);

        console.log(person1.getFullName()); // Require parenthesis to call this function
        console.log(person2.getFullName());

        // 'setter' method
        // The setter method allows us to modify the value of certain properties. We can write a setter method using keyword set followed by a function.
        {
            class Person {
                constructor(firstName, lastName, age, country, city) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                    this.score = 0;
                    this.skills = [];
                }
                getFullName() {
                    return `${this.firstName} ${this.lastName}`;
                }

                // getter method
                get getScore() {
                    return this.score;
                }
                get getSkills() {
                    return this.skills;
                }

                // setter method
                set setScore(score) {
                    this.score += score
                }
                set setSkill(skill) {
                    this.skills.push(skill)
                }
            }

            const person1 = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
            const person2 = new Person('Rishi', 'Rathour', 20, 'India', 'Mandi');

            person1.setScore = 1
            person1.setSkill = 'HTML';
            person1.setSkill = 'CSS';
            person1.setSkill = 'JavaScript';

            person2.setScore = 1;
            person2.setSkill = 'Planning';
            person2.setSkill = 'Managing';
            person2.setSkill = 'Organizing';

            console.log(person1.score);
            console.log(person2.score);
            console.log(person1.skills);
            console.log(person2.skills);

        }

        // Let us make a regular method called getPersonInfo in Person class
        {
            class Person {
                constructor(firstName, lastName, age, country, city) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.age = age;
                    this.country = country;
                    this.city = city;
                    this.score = 0;
                    this.skills = [];
                }
                getFullName() {
                    return `${this.firstName} ${this.lastName}`
                }

                get getScore() {
                    return this.score;
                }
                get getSkills() {
                    return this.skills;
                }

                set setScore(score) {
                    this.score += score;
                }
                set setSkill(skill) {
                    this.skills.push(skill)
                }

                getPersonInfo() {
                    let fullName = `${this.firstName} ${this.lastName}`;
                    let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`;
                    let formattedSkills = skills ? `He knows ${skills}` : '';

                    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}, ${formattedSkills}`;
                    return info
                }
            }

            const person1 = new Person('Chudamani', 'Lawrence', 20, 'India', 'Mandi');
            const person2 = new Person('Rishi', 'Rathour', 20, 'India', 'Mandi');
            const person3 = new Person('Virender', 'Kumar', 22, 'India', 'Mandi');

            person1.setScore = 1;
            person1.setSkill = 'HTML';
            person1.setSkill = 'CSS';
            person1.setSkill = 'JavaScript';

            person2.setScore = 1;
            person2.setSkill = 'Planning';
            person2.setSkill = 'Managing';
            person2.setSkill = 'Organizing';

            console.log(person1.getScore);
            console.log(person2.getScore)

            console.log(person1.getSkills)
            console.log(person2.getSkills)
            console.log(person3.getSkills)

            console.log(person1.getPersonInfo())
            console.log(person2.getPersonInfo())
            console.log(person3.getPersonInfo())
        }


    }

    // Static Methods
    // The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create, or clone objects. 
    {
        class Person {
            constructor(firstName, lastName, age, country, city) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0;
                this.skills = [];
            }
            getFullName() {
                return `${this.firstName} ${this.lastName}`
            }

            get getScore() {
                return this.score;
            }
            get getSkills() {
                return this.skills
            }

            set setScore(score) {
                this.score += score;
            }
            set setSkill(skill) {
                this.skills.push(skill)
            }

            getPersonInfo() {
                let fullName = this.getFullName();
                let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + `and ${this.skills[this.skills.length - 1]}`;
                let formattedSkills = skills ? `He knows ${skills}` : ''
                let info = `${fullName} is ${this.age}. He lives at ${this.city}, ${this.country}, ${formattedSkills}`;
                return info
            }

            // static method
            static favoriteSkill() {
                const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
                const index = Math.floor(Math.random() * skills.length);
                return skills[index]
            }
            static showDateTime() {
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                let date = now.getDate();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                if (hours < 10) {
                    hours = '0' + hours
                }
                if (minutes < 10) {
                    minutes = '0' + minutes
                }

                let dateMonthYear = date + '.' + month + '.' + year;
                let time = hours + ':' + minutes + ':'
                let fullTime = dateMonthYear + ' ' + time
                return fullTime
            }
        }
        console.log(Person.favoriteSkill());
        console.log(Person.showDateTime());
    }
}

// Inheritance
/* Using Inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code.
 */
// let us create child class out of Person as parent class
{
    // syntax:------->
    // class ChildClassName extends ParentClassName {
    //     // code goes here
    // }

    // let us create a child of Person class
    {
        class Person {
            constructor(firstName, lastName, age, country, city) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.country = country;
                this.city = city;
                this.score = 0;
                this.skills = [];
            }
            getFullName() {
                return `${this.firstName} ${this.lastName}`;
            }
            get getScore() {
                return this.score;
            }
            get getSkills() {
                return this.skills
            }

            set setScore(score) {
                this.score += score;
            }
            set setSkill(skill) {
                this.skills.push(skill)
            }

            getPersonInfo() {
                let fullName = this.getFullName();
                let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + `and ${this.skills[this.skills.length - 1]}`;
                let formattedSkills = skills ? `He knows ${skills}` : ''
                let info = `${fullName} is ${this.age}. He lives at ${this.city}, ${this.country}, ${formattedSkills}`;
                return info
            }

            // static method
            static favoriteSkill() {
                const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
                const index = Math.floor(Math.random() * skills.length);
                return skills[index]
            }
            static showDateTime() {
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                let date = now.getDate();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                if (hours < 10) {
                    hours = '0' + hours
                }
                if (minutes < 10) {
                    minutes = '0' + minutes
                }

                let dateMonthYear = date + '.' + month + '.' + year;
                let time = hours + ':' + minutes + ':'
                let fullTime = dateMonthYear + ' ' + time
                return fullTime
            }
        }

        class Student extends Person {
            saySomething() {
                console.log('I am a child of the person class');
            }
        }

        const s1 = new Student('Chudamani', 'Lawrence', 30, 'India', 'Mandi');
        console.log(s1);
        console.log(s1.saySomething());
        console.log(s1.getFullName());
        console.log(s1.getPersonInfo());
        // Here we can use all of the methods of Person class in Student class as Person class in Inherited by Student class
    }
}

// Overriding Methods
/* We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function in child class too. Inside the constructor function, we call the 'super()' function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in teh child class, the parent method will be overridden */
{
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
            this.score = 0;
            this.skills = [];
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        get getScore() {
            return this.score;
        }
        get getSkills() {
            return this.skills
        }

        set setScore(score) {
            this.score += score;
        }
        set setSkill(skill) {
            this.skills.push(skill)
        }

        getPersonInfo() {
            let fullName = this.getFullName();
            let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + `and ${this.skills[this.skills.length - 1]}`;
            let formattedSkills = skills ? `He knows ${skills}` : ''
            let info = `${fullName} is ${this.age}. He lives at ${this.city}, ${this.country}, ${formattedSkills}`;
            return info
        }

        // static method
        static favoriteSkill() {
            const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
            const index = Math.floor(Math.random() * skills.length);
            return skills[index]
        }
        static showDateTime() {
            let now = new Date();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let date = now.getDate();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            if (hours < 10) {
                hours = '0' + hours
            }
            if (minutes < 10) {
                minutes = '0' + minutes
            }

            let dateMonthYear = date + '.' + month + '.' + year;
            let time = hours + ':' + minutes + ':'
            let fullTime = dateMonthYear + ' ' + time
            return fullTime
        }
    }
    class Student extends Person {
        constructor(firstName, lastName, age, country, city, gender) {
            super(firstName, lastName, age, country, city);
            this.gender = gender
        }

        saySomething() {
            return 'I am a child of the Person class';
        }
        getPersonInfo() {
            let fullName = this.getFullName();
            let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`;

            let formattedSkills = skills ? `${this.gender == 'Male' ? 'He' : 'She'} knows ${skills}` : '';

            let pronoun = this.gender == 'Male' ? 'He' : 'She';

            let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
            return info
        }
    }
    const s1 = new Student(
        'Chudamani',
        'Lawrence',
        20,
        'India',
        'Mandi',
        'Male'
    )

    const s2 = new Student(
        'Tia',
        'Chaudhari',
        20,
        'India',
        'Mandi',
        'Female'
    )

    s1.setScore = 1;
    let s1Skills = ['HTML', 'CSS', 'JavaScript'];
    s1Skills.forEach(e => {
        s1.setSkill = e
    })

    s2.setScore = 1;
    let s2Skills = ['Planning', 'Managing', 'Organizing'];
    s2Skills.forEach(e => {
        s2.setSkill = e
    });

    console.log(s1)

    console.log(s1.saySomething());
    console.log(s1.getFullName());
    console.log(s1.getPersonInfo());


    console.log(s2)

    console.log(s2.saySomething());
    console.log(s2.getFullName());
    console.log(s2.getPersonInfo());
}

console.log('%c =================== Exercise ====================', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38) , 21px 21px 0 rgb(42,21,113); margin-bottom: 7px; padding: 5px;');