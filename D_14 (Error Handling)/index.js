// @ts-check
// const prompt = require('prompt-sync')();
// const fs = require('fs');
/* Error Handling */
// JavaScript is loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
// JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block
try {
    // code that may throw error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

/* try: wrap suspicious code that may throw an error in try block. The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific message to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
*/

// Examples
{
    try {
        let lastName = 'Lawrence';
        let fullName = `${firstName} ${lastName} `;
    } catch (err) {
        console.log('this is manual error:- ', err);
    }

    try {
        let lastName = 'Lawrence';
        let fullName = firstName + ' ' + lastName;
    } catch (err) {
        console.error(err) // We can use console.log or console.error also
    } finally {
        console.log('In any case I will be executed');
    }

    // The catch block takes parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message
    {
        try {
            let lastName = 'Lawrence';
            let fullName = firstName + ' ' + lastName;
        } catch (err) {
            console.log('Name of teh error', err.name); // err object name keyword
            console.log('Error message', err.message); // err object message keyword
        } finally {
            console.log('In any case I will be executed.');
        }
    }
}
/* throw: the throw statement allows us to create a custom error. We can through a string, number, boolean or an object. Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. */
{
    // throw 'Custom Error: ' //Generates an exception with a string value
    // throw 69 ; // Generates an exception with the value 69
    // throw true; // Generates an exception with the value true
    // throw new Error('Required'); // Generates an error object with the message of Required

    // const throwErrorExampleFun = ()=>{
    //     let message;
    //     let x = prompt('Enter a number: ');
    //     try{
    //         if (x=='') throw 'Empty';
    //         if(isNaN(x)) throw 'not a number'
    //         x = Number(x);
    //         if (x<5) throw 'too low';
    //         if (x>10) throw 'too high'
    //     }catch (err) {
    //         console.log(err)
    //     }
    // }
    // throwErrorExampleFun()
}

// Error types


// => ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared
{
    try {
        let firstName = 'Chudamani';
        let fullName = firstName + ' ' + lastName;
    } catch (err) {
        console.log(err.name, err.message);
    }
}

// SyntaxError: A syntax error has occurred
// {
//     let square = 2*2;
//     console.log(square);
//     console.log('Hello, world');
// }

// TypeError: A type error has occurred
{
    // let num = 30;
    // console.log(num.toLowerCase());
}


/* ========================= Exercise ============================= */
console.log('%c ================= Exercise =================', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 5px; padding: 5px;');
{
    const Q_1 = 'Write code that handles the exception when an array is empty and throws a custom exception with the message "Array is empty."'
    console.log('%cindex.js line:106 Q_1', 'color: white; font-size: 16px; background-color: #007acc;', `${Q_1}`);
    {
        const throwErrMtArr = (arr) => {
            if (arr.length === 0) {
                throw 'Array is empty'
            }
        }
        let myArr = [1, 2, 3, 4];
        let myArr1 = [];
        try {
            throwErrMtArr(myArr);
            throwErrMtArr(myArr1)
        } catch (err) {
            console.error(err)
        }
    }

    const Q_2 = ' Write code that handles the exception when an element in the array is not a number and throws a custom exception with the message "Invalid input: element at index [index] is not a number."'
    console.log('%cindex.js line:120 Q_2', 'color: white; background-color: #007acc;', Q_2);
    {
        const NaNError = (arr) => {
            arr.forEach((e, i) => {
                if (typeof (e) != 'number') {
                    const err = new Error();
                    err.name = 'Invalid input';
                    err.message = `element at index ${i} is not a number`;
                    throw err;
                }
            })
        }
        const array = [67, 'shyam', 'shubham', 34];
        try {
            NaNError(array)
        } catch (error) {
            console.log(error)
        } finally {
            console.log('Code block completed');
        }
    }

    const Q_3 = 'Write code that handles the exception when you try to access an undefined variable and throws a custom exception with the message "Variable is undefined."'
    console.log('%cindex.js line:147 Q_3', 'color: white; background-color: #007acc;', Q_3);
    {
        const varUndefined = (variable) => {
            try {
                console.log(variable);
            } catch (err) {
                throw new Error('Variable is undefined')
            }
        }
        try {
            varUndefined(myVar)
        } catch (err) {
            console.error(err.message)
        }
    }

    const Q_4 = 'Write code that handles the exception when dividing by zero and throws a custom exception with the message "Division by zero."'
    console.log('%cindex.js line:164 Q_4', 'color: white; background-color: #007acc;', Q_4);
    {
        const divByZeroErr = (dividend, divisor) => {
            try{
                if (divisor === 0) {
                    throw new Error('Division by zero')
                }
                return dividend / divisor
            }catch(err){
                throw err
            }
        }
        const dividend = 34;
        const divisor = 0;
        try{
            divByZeroErr(dividend,divisor)
        }catch (err){
            console.error(err);
        }

    }

    // const Q_5 = 'Write code that handles the exception when attempting to open a non-existent file using the fs module in Node.js and throws a custom exception with the message "File not found."';

    // console.log('%cindex.js line:187 Q_5', 'color: white; background-color: #007acc;', Q_5);
    // {
    //     const openFile = (file)=>{
    //         if (fs.existsSync(file)){
    //             console.log('File Exists')
    //         }else{
    //             throw new Error('File not found')
    //         }
    //     }
    //     const file = 'robot.txt';
    //     try{
    //         openFile(file)
    //     }catch (err){
    //         console.error(err.message);
    //     }
    // }

}