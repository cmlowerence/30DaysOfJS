// @ts-check
/* Error Handling */
// JavaScript is loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.
// JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block
try{
    // code that may throw error
}catch(err){
    // code to be executed if an error occurs
}finally{
    // code to be executed regardless of an error occurs or not
}

/* try: wrap suspicious code that may throw an error in try block. The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific message to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
*/

// Examples
{
    try{
        let lastName = 'Lawrence';
        let fullName = `${firstName} ${lastName} `;
    }catch(err){
        console.log('this is manual error:- ',err);
    }

    try{
        let lastName = 'Lawrence';
        let fullName = firstName + ' ' + lastName;
    }catch(err){
        console.error(err) // We can use console.log or console.error also
    }finally{
        console.log('In any case I will be executed');
    }

    // The catch block takes parameter. It is common to pass e, err or error as a parameter to the catch block. This parameter is an object and it has name and message keys. Lets use the name and message
    {
        try{
            let lastName = 'Lawrence';
            let fullName = firstName + ' ' + lastName;
        }catch(err){
            console.log('Name of teh error', err.name); // err object name keyword
            console.log('Error message',err.message); // err object message keyword
        } finally{
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

    const throwErrorExampleFun = ()=>{
        let message;
        let x = prompt('Enter a number: ');
        try{
            if (x=='') throw 'Empty';
            if(isNaN(x)) throw 'not a number'
            x = Number(x);
            if (x<5) throw 'too low';
            if (x>10) throw 'too high'
        }catch (err) {
            console.log(err)
        }
    }
    throwErrorExampleFun()
}

// Error types
// => ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared
{
    let firstName = 'Chudamani';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName)
}

// SyntaxError: A syntax error has occurred
{
    let square = 2*2;
    console.log(square);
    console.log('Hello, world');
}