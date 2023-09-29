// import countries from "./countries_data.mjs";
// console object methods
// => console.log()
{
    // Showing output on browser
    {
        console.log('30 Days of JavaScript');
        // With substitution
        console.log('%d %s of JavaScript', 30, 'Days');

        // CSS styling log message
        {
            console.log('%c30 Days of JavaScript', 'color: green') // log output is red
            console.log(
                '%c30 Days%c %cOf%c %cJavaScript%c',
                'color: orange',
                '',
                'color: hotpink',
                '',
                'color: red'
            ) // log output is orange hotpink and yellow text
        }
    }
}

// => console.warn()
{
    // We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices.
    {
        console.warn('This is a warning');
        console.warn('You are using React. Do not touch DOM. Virtual DOM will take care of handling the DOM!');
        console.warn('Warning is different from error');
    }

}

// => console.table()
{
    // The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must e an array or an object, and one additional optional parameter columns.
    {
        const user = {
            name: 'Chudamani',
            title: 'Programmer',
            country: 'India',
            city: 'Mandi',
            age: 250
        }
        console.table(user)

        const countries = [
            ['Finland', 'Helsinki'],
            ['Sweden', 'Stockholm'],
            ['Norway', 'Oslo']
        ]
        console.table(countries)

        const users = [
            {
                name: 'Chudamani',
                title: 'Programmer',
                country: 'India',
                city: 'Mandi',
                age: 250
            },
            {
                name: 'Rishi',
                title: 'Photographer',
                country: 'England',
                city: 'London',
                age: 230
            },
            {
                name: 'Virender',
                title: 'Actor',
                country: 'France',
                city: 'Paris',
                age: 500
            }
        ]
        console.table(users);
    }
}

// => console.time()
{
    // Starts a timer we can use to track how long an operation takes. When we call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.
    const countries = [
        ['FInland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
    ]
    // 1
    console.time('Regular for loop')
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i][0], countries[i][1])
    }
    console.timeEnd('Regular for loop');

    // 2
    console.time('for of loop');
    for (const [name, city] of countries) {
        console.log(name, city);
    }
    console.timeEnd('for of loop');

    // 3
    console.time('forEach loop')
    countries.forEach(([a, b]) => console.log(a, b));
    console.timeEnd('forEach loop');
}

// => console.info()
{
    // It displays information message on browser console
    {
        console.info('30 Days Of JavaScript challenge is trending on Github');
        console.info('30 Days Of fullStack challenge might be released');
        console.info('30 Days Of HTML and CSS challenge might be released');
    }
}

// => console.assert()
{
    // The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed

    console.assert(4 > 3, '4 is greater than 3') // no output
    console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

    for (let i = 0; i <= 10; i++) {
        let errorMessage = `${i} is not even`;
        console.log('the # is ' + i);
        console.assert(i % 2 === 0, {
            number: i,
            errorMessage: errorMessage
        });
    }
}

// console.group();
{
    // console.group() can help to group different log groups.
    {
        const names = ['Asabeneh', 'Brook', 'David', 'John']
        const countries = [
            ['Finland', 'Helsinki'],
            ['Sweden', 'Stockholm'],
            ['Norway', 'Oslo']
        ]
        const user = {
            name: 'Asabeneh',
            title: 'Programmer',
            country: 'Finland',
            city: 'Helsinki',
            age: 250
        }
        const users = [
            {
                name: 'Asabeneh',
                title: 'Programmer',
                country: 'Finland',
                city: 'Helsinki',
                age: 250
            },
            {
                name: 'Eyob',
                title: 'Teacher',
                country: 'Sweden',
                city: 'London',
                age: 25
            },
            {
                name: 'Asab',
                title: 'Instructor',
                country: 'Norway',
                city: 'Oslo',
                age: 22
            },
            {
                name: 'Matias',
                title: 'Developer',
                country: 'Denmark',
                city: 'Copenhagen',
                age: 28
            }
        ]

        console.group('Names');
        console.log(names)
        console.groupEnd()

        console.group('Countries');
        console.log(countries)
        console.groupEnd();

        console.group('Users')
        console.log(user)
        console.log(users)
        console.groupEnd();
    }
}

// => console.count()
{
    // It prints the number fo times the console.count() is called. It takes a string label parameter. It is very helpful to count the number fo times a function is called.
    {
        const func = () => {
            console.count('Function has been called');
        }
        func();
        func();
        func();
    }
}

// => console.clear()
{
    // The console.clear() cleans the browser console
    {
        console.clear()
    }
}

/* ============================ Exercise ================================= */

{
    // Exercise Level 1
    {
        const Q_1 = 'Q_1: Display the countries array as a table';
        console.log('%cindex.mjs line:228 Q_1', 'color: #26bfa5;', Q_1);
        {
            const countries = [
                ['India','New Delhi'],
                ['England', 'London'],
                ['America','Washington']
            ]
            console.table(countries)
        }

        const Q_2 = 'Q_2: Display the countries object as a table';
        console.log('%cindex.mjs line:235 Q_2', 'color: white; background-color: #007acc;', Q_2);
        {
            console.table(countries);
        }

        const Q_3 = 'Q_3: Use console.group() to group logs';
        console.log(`%c ${Q_3}`, 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 7px; padding: 5px;');
        const user1 = {
            name: 'Rakesh',
            age: 22,
            country: 'Finland',
            married: false
        }
        const user2 = {
            name: 'Rohit',
            age: 54,
            country: 'Bangladesh',
            married: true
        }
        console.group('Users: ')
        console.log(user1);
        console.log(user2)
        console.groupEnd('Users: ')
    }

    // Exercise: Level-2
    console.log('%c Exercise: Level-2', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 7px; padding: 5px;');
    {
        const Q_1 = 'Q_1: 10 > 2 * 10 use console.assert()';
        console.log('%cindex.mjs line:268 Q_1', 'background-color: #2cbfa5;', Q_1);
        {
            console.assert(10>(2*10),'Error in your calculation');
        }

        const Q_2 = 'Q_2: Write a warning message using console.warn()'
        console.log('%cindex.mjs line:275 Q_2', 'color: white; background-color: #26bfa5;', Q_2);
        {
            console.warn('Keep doing daily challenge of 30 Days Of JavaScript, either it will cost you so heavy')
        }

        const Q_3 = 'Q_3: Write an error message using console.error().';
        console.log('%cindex.mjs line:281 Q_3', 'color: white; background-color: #26bfa5;', Q_3);
        {
            console.error('Make your JavaScript clean and more readable. Your code is being a junkyard... I can not get this code anymore...')
        }
    }

    // Exercise: Level-3
    console.log('%c Exercise: Level-3', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 7px; padding: 5px;');
    {
        const Q_1 = 'Q_1: Check the speed difference among the following loops: while, for, for of, forEach'

        console.log('%cindex.mjs line:292 Q_1', 'color: white; background-color: #26bfa5;', Q_1);
        {
            const list = new Array(1000).fill(1);

            // While loops
            console.time('While Loop: ')
            let i = 0;
            while (i < list.length){
                // while looop
                i++
            }
            console.timeEnd('While Loop: ')

            // for loop
            console.time('For loop:');
            for (let i=0;i<list.length;i++){
                // For loop
            }
            console.timeEnd('For loop:');

            // for of loop
            console.time('For-of loop');
            for (const i of list){
                // for of loop
            }
            console.timeEnd('For-of loop')

            // forEach loop
            console.time('forEach loop: ');
            list.forEach(e=>{
                // forEach loop here
            })
            console.timeEnd('forEach loop: ');

        }
    }
}