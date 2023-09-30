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
