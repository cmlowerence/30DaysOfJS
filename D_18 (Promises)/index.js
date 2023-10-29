// D_18 Promises


// Promise
/*
We human give or receive a promise to do something activity at some point in time. If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common with the above examples.

A Promise s a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
    * pending: initial state, neither fulfilled nor rejected
    * fulfilled : meaning that the operation completed successfully
    * rejected: meaning that the operation failed

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. (if the promise has already been fulfilled or rejected when a corresponding handler is attached the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As th Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained
*/

// Callbacks

/*
To understand promise very well let us understand callback first. Let's see teh following callbacks. From the following code blocks we will notice, the difference between callback and promises

    * callback Let us see a callback function which can take two parameters.
    The first parameter is err and the second is result. If te err parameter is false, there will not be error otherwise it will return an error.
    */


// In this case the err has a value and it will return the err block

{// Callback
    const doSomething = callback => {
        setTimeout(() => {
            const skills = ['HTML', 'CSS', 'JS'];
            callback('It did not go well', skills)
        }, 2000)
    }

    const callback = (err, result) => {
        if (err) {
            return console.log(err)
        }
        return console.log(result)
    }
    doSomething(callback);
}
// In this case the err is false and it will return the els block which is result
{
    const doSomething = callback => {
        setTimeout(() => {
            const skills = ['HTML', 'CSS', 'JS'];
            callback(false, skills)
        }, 2000)
    }

    doSomething((err, result) => {
        if (err) {
            return console.log(err)
        }
        return console.log(result)
    })
}

// Promise constructor

/* We can create a promise using the Promise constructor. We can create a new promise using the keyword new followed by the word Promise and followed by a parenthesis. Inside teh parenthesis, it takes a callback function. The promise callback function has two parameters which are resolve and reject functions. */

// syntax
{const promise = new Promise((res, rej) => {
    res('success');
    rej('failure');
})}

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject('Something wrong has happened');
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err));

// The above promise has been settled with resolve. Let us another example when the promise is settled with reject.
{
    // Promise
    const doPromise = new Promise((res, rej) => {
        setTimeout(() => {
            const skills = ['HTML', 'CSS', 'JS'];
            if (skills.includes('Node')) {
                res('Full Stack Developer');
            } else {
                rej('Something went wrong in setTimeout function in line 101')
            }
        })
    })
    doPromise
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.error(err)
        })
}

{
    const wait = () => {
        return new Promise(res => {
            setTimeout(() => {
                res('This code is to be executed after custom code block 1 s later')
                console.log(res)
            }, 1000)
        })
    }
    const custom = async () => {
        try{
            const result = await wait();
            console.log('This is test code block',result)
        }catch(err){
            console.error(err)
        }
    }
    custom()
}

// Fetch API
/* The Fetch API provides an interface for fetching resources (including across network). IT will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. */
{
    const url = 'https://restcountries.com/v2/all' //countries api
    fetch(url)
        .then(response => response.json()) //accession the API data as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err)); //handling error if something wrong happens
}

// Async and Await
/* Async and await is an elegant way to handle promises. It is easy to understand and it clean to write */
const square = async function (n) {
    return await n * n
}
console.log(square(2))

// The word async in from of the function means that function will return a promise. The above square function instead of a value it returns a promise

// How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const square1 = async function (n) {
    return n * n
}
let result;
(async ()=>{
    result = await square1(2)
    console.log('✌️result --->', result);
})()

{
    const delay = (ms) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(`Operation completed after ${ms / 1000} seconds`)
            }, ms)
        })
    }

    const operation = async () => {
        try {
            console.log('Start of async function')

            const result2 = await delay(1000);
            console.log('I have not used await here...', result2)
            const result1 = await delay(2000);// Delay of 2 seconds / 2000 milliseconds
            console.log(result1)


            console.log('End of async function');
        } catch (err) {
            console.error(err)
        }
    }

    operation()
    console.log('%cThis line is written after async function', 'color: blue;')
}

// Now, as we can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. Async and await go together, one can not exist without the other

// LEt us fetch API data using both promise method and async and await method.

const url = 'https://restcountries.com/v2/all'
// **Promise
// {
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=> console.log(data))
//     .catch(err=>console.error(err))
// }

// ** async and await
{
    let countries1 = null;
    const fetchData = async ()=>{
        try{
            const response = await fetch(url)
            countries1 = await response.json();
            // console.log(countries)
        }catch(err){
            console.error(err)
        }
    }
   
}

