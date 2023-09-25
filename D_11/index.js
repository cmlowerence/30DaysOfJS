/* Destructuring and Spreading */
console.log('Day 11 JS tutorial. \n Destructuring and Spreading');

// Destructuring is a way to unpack arrays and object and assigning to a distinct variable

// Destructuring Arrays
console.log('Destructuring Arrays');
const numbers = [1, 2, 3, 4];
let [numOne, numTwo, numThree, numFour] = numbers
console.log(numOne, numTwo, numThree);

// Skipping some index while destructuring
let names = ['Aman', 'Arun', 'Ajay', 'Rajesh'];
let [first, second, , fourth] = names // Skipping index 2 or third value of array
console.log(first, second, fourth)

// Using default values in case some index have undefined values
{
    let names = [undefined, 'Virender', 'Rambo', undefined]
    let [first = 'Chudamani', second, third, fourth = 'Rishi'] = names
    console.log(first, second, third, fourth)
}

// We can't assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator (...).
{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, num4, ...rest] = num
    // Here ...rest contains all the rest values after num4. We can access it using ...rest variable
    console.log('The array elements with assigned variables: ', num1, num2, num3, num4)
    console.log('Rest of the array elements: ', ...rest);
}

// Destructuring during iteration
{
    const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

    for (const [country, city] of countries) {
        console.log(country, city)
    }

    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    for (const [first, second, third] of fullStack) {
        console.log([first, second, third])
    }
}

// Destructuring Objects
console.log('Destructuring Objects: ')
// When we destructure an object, we have to give the variable same name as of its key or renaming its key to another name as:
{
    let rectangle = {
        width: 20,
        height: 10,
        area: 200
    }
    let { width, height, area, perimeter } = rectangle
    console.log(width, height, area, perimeter)
    // As here perimeter is not defined in object above, it will be assigned as undefined value
}

// We can rename the keys of object and access them via those names as:
{
    console.log("Accessing object values by renaming the keys: ")
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
    }
    let { width: w, height: h, area: a, perimeter: p } = rectangle;
    console.log(w, h, a);
}

// We can assign new key values during destructuring the object. If we don't give any value to the key, the value undefined is given to that key
{
    console.log('Adding new key value pair during destructuring...')
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
    }
    let { width, height, area, perimeter = 60 } = rectangle;
    console.log(width, height, area, perimeter)
}

// Reassigning the value to the key
{
    const rectangle = {
        width: 20,
        height: 10,
        area: 200,
        perimeter: 60
    }
    // Let us try change width to 30 and perimeter to 90
    let { width = 30, height, area, perimeter = 80 } = rectangle;
    console.log(width, height, area, perimeter)
    // We can't do this during destructuring of object

    console.log(`To do this we have to give those key values prior to destructuring them`)


    rectangle['width'] = 30;
    rectangle['perimeter'] = 80
    console.log(width, height, area, perimeter)
    // This will give same output as above

}

// Destructuring keys as a function parameters
{
    // Without destructuring
    {
        const rect = {
            width: 20,
            height: 10,
        }

        const calculatePerimeter = (rectangle) => {
            return 2 * (rectangle.width + rectangle.height)
        }
        console.log('Perimeter of the rect object given is ', calculatePerimeter(rect));

        // Another example
        const person = {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
            age: 250,
            country: 'Finland',
            job: 'Instructor and Developer',
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Node',
                'MongoDB',
                'Python',
                'D3.js'
            ],
            languages: ['Amharic', 'English', 'Suomi(Finnish)']
        }

        // Creating a function which will give the information about the person
        const getPersonInfo = obj => {
            const skills = obj.skills;
            const formattedSkills = skills.slice(0, -1).join(',')
            const languages = obj.languages;
            const formattedLanguages = languages.slice(0, -1).join(',');

            const personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills}, and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[languages.length - 1]}.`

            return personInfo;
        }
        console.log(getPersonInfo(person));
    }

    // Object perimeter with destructuring
    {
        const rect = {
            width: 20,
            height: 10
        }
        const calculatePerimeter = ({ width, height }) => {
            return 2 * (width + height)
        }
        console.log(calculatePerimeter(rect));

        // same with person object
        const person = {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
            age: 250,
            country: 'Finland',
            job: 'Instructor and Developer',
            skills: [
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Redux',
                'Node',
                'MongoDB',
                'Python',
                'D3.js'
            ],
            languages: ['Amharic', 'English', 'Suomi(Finnish)']
        }

        const getPersonInfo = ({ firstName, lastName, age, country, job, skills, languages }) => {
            return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is ${(['a', 'e', 'i', 'o', 'u'].includes(job.charAt(0).toLowerCase())) ? 'an' : 'a'} ${job}. He teaches ${skills.slice(0, -1).join(',')} and ${skills[skills.length - 1]}. He speaks ${languages.slice(0, -1).join(',')} and little bit of ${languages[languages.length - 1]}`
        }
        console.log(getPersonInfo(person))
    }
}
console.log('\n\n\n')
// Destructuring object during iteration
console.log('Destructuring object during iteration \n')
{
    const todoList = [
        {
            task: 'Prepare JS Test',
            time: '04/01/2023 08:30',
            completed: true
        },
        {
            task: 'Give JS Test',
            time: '4/1/2020 10:00',
            completed: false
        },
        {
            task: 'Assess Test Result',
            time: '4/1/2020 1:00',
            completed: false
        }
    ]

    for ({ task, time, completed } of todoList) {
        console.log(task, time, completed);
    }
}
console.log('\n\n\n')
// Spread or rest operator
console.log('Spread or rest operator')

// Spread Operator to get rest of array element
console.log('Spread Operator to get rest of array element\n');
{
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let [num1, num2, num3, num4, ...rest] = num;
    console.log(num1, num2, num3, num4)
    console.log(rest)
}
// Spread operator to copy array
{
    const evens = [0, 2, 4, 6, 8, 10]
    const evenNum = [...evens];
    const odds = [1, 3, 5, 7, 9];
    const oddNum = [...odds]
    const wholeNum = [...evens, ...odds].sort()
    console.log(evenNum);
    console.log(oddNum);
    console.log(wholeNum);

    const frontEnd = ['HTML', 'CSS', 'JS', 'React']
    const backEnd = ['Node', 'Express', 'MongoDB'];
    const fullStack = [...frontEnd, ...backEnd];
    console.log(fullStack);
}

// Spread operator to copy object
{
    const user = {
        name: 'Chudamani',
        title: 'Programmer',
        country: 'India',
        city: 'Mandi'
    }
    const copiedUser = { ...user }
    console.log(copiedUser)

    // Modifying object while coping
    {
        const copiedUser = {
            ...user,
            title: 'Instructor'
        }
        console.log(copiedUser)
    }
}

// Spread operator with arrow function
{
    // const sumAllNum = (...args) =>{
    //     console.log(args)
    // }
    // sumAllNum(1,2,3,4,5,6,7,8,9)
    const sum = (...args) => {
        let sum = 0;
        for (num of args) {
            sum += num
        }
        return sum
    }
    console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9))
}

console.log('\n\n\n')
/* ================== EXERCISE ====================== */
console.log('================== EXERCISE ======================\n')


// Exercise Level 1
console.log('======================= Exercise Level 1 ======================\n\n')
{
    const constants = [2.72, 3.14, 9.81, 37, 100]
    const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
    const rectangle = {
        width: 20,
        height: 10,
        area: 200,
        perimeter: 60
    }
    const users = [
        {
            name: 'Brook',
            scores: 75,
            skills: ['HTM', 'CSS', 'JS'],
            age: 16
        },
        {
            name: 'Alex',
            scores: 80,
            skills: ['HTM', 'CSS', 'JS'],
            age: 18
        },
        {
            name: 'David',
            scores: 75,
            skills: ['HTM', 'CSS'],
            age: 22
        },
        {
            name: 'John',
            scores: 85,
            skills: ['HTML'],
            age: 25
        },
        {
            name: 'Sara',
            scores: 95,
            skills: ['HTM', 'CSS', 'JS'],
            age: 26
        },
        {
            name: 'Martha',
            scores: 80,
            skills: ['HTM', 'CSS', 'JS'],
            age: 18
        },
        {
            name: 'Thomas',
            scores: 90,
            skills: ['HTM', 'CSS', 'JS'],
            age: 20
        }
    ]

    // Q1_ Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp

    console.log('Q1_ Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp\n')
    let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
    console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp,'\n\n');

    // Q2_ Destructure and assign the elements of countries array to fin, est, sw, den, nor
    console.log('Q2_ Destructure and assign the elements of countries array to fin, est, sw, den, nor\n')

    let [fin,est,sw,den,nor] = countries;
    console.log(fin,est,sw,den,nor,'\n\n')

    // Q3_ Destructure teh rectangle object by its properties or keys
    console.log('Q3_ Destructure teh rectangle object by its properties or keys\n');

    let {width:w,height:h,area:a,perimeter:p} = rectangle
    console.log(w,h,a,p,'\n');

    

}
