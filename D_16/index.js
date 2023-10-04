// Day 16: JSON # 30 Days of JavaScript
/*JSON stands for JavaScript Object Notation. The JASON syntax is derived from JavaScript object notation syntax, but JSON format is text or string only. JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to client. JSON is an easier-to-use alternative of XML */

// Example of JSON
// {
//     "users":[
//         {
//             "firstName":"Chudamani",
//             "lastName":"Lawrence",
//             "age":20,
//             "email":"cmlowerence@gmail.com"
//         },
//         {
//             "firstName":"Rishi",
//             "lastName":"Rathour",
//             "age":20,
//             "email":"rishirathour123@gmail.com"
//         },
//         {
//             "firstName":"Virender",
//             "lastName":"Kumar",
//             "age":21,
//             "email":"virenderkumar123@gmail.com"
//         }
//     ]
// }

/* The above JSON example is not much different from a normal object. Then, what is difference? The difference is the key of a JSON object should e with double quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON 

Let us see the above example in more detail, it starts with a curly bracket. Inside teh curly bracket, there is "users" key which has a value array. Inside the array, we have different objects and each objects has keys, each keys has to have in double quotes. For instance, we use "firstName" instead fo just firstName, however in object we use keys without double quotes. This is the major difference between an object and a JSON. Let's see more examples about JSON:- 


{
    "Rishi":{
        "email": "rishirathour123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points":30
    },
    "Chudamani":{
        "email": "cmlowerence123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript",
            "Node",
            "React",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points":60
    },
    "Virender":{
        "email": "virenderkumar123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points":30
    },
    "Kuldeep":{
        "email": "kuldeep123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points":30
    },
    "Chopender":{
        "email": "chopender123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "Swift"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points":50
    },
    "Bhoj Raj":{
        "email": "bhojraj123@gmial.com",
        "skills":[
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points":30
    }   
}
*/

// Converting JSON to JavaScript Object
// Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration. In JavaScript the keyword JSON has parse() and stringify() methods. When we want to change the JSON to an object, we parse the JSON using JSON.parse(). When we want to change the object to JSON we use JSON.stringify().

/* 
syntax{
    JSON.parse(json[,reviver])
    => json or text, the data
    => reviver is an optional callback function
    => JSON.parse(json,(key,value)=>{

    })
}
*/

const userText = `{
        "users":[
            {
                "firstName":"Chudamani",
                "lastName":"Lawrence",
                "age":20,
                "email":"cmlowerence@gmail.com"
            },
            {
                "firstName":"Rishi",
                "lastName":"Rathour",
                "age":20,
                "email":"rishirathour123@gmail.com"
            },
            {
                "firstName":"Virender",
                "lastName":"Kumar",
                "age":21,
                "email":"virenderkumar123@gmail.com"
            }
        ]
    }`
const userObj = JSON.parse(userText,)
console.log(userObj)

// Using a reviver function with JSON.parse()
/*To use the reviver function as a formatter, we put the keys we want to format first name and last name value. Let us say, we are interested to format the firstName and lastName of the JSON data. */

{
    const userText = `{
            "users":[
                {
                    "firstName":"Chudamani",
                    "lastName":"Lawrence",
                    "age":20,
                    "email":"cmlowerence@gmail.com"
                },
                {
                    "firstName":"Rishi",
                    "lastName":"Rathour",
                    "age":20,
                    "email":"rishirathour123@gmail.com"
                },
                {
                    "firstName":"Virender",
                    "lastName":"Kumar",
                    "age":21,
                    "email":"virenderkumar123@gmail.com"
                }
            ]
        }`;
    const usersObj = JSON.parse(userText, (key, value) => {
        let newValue = ((typeof (value) == 'string') && (key != 'email')) ? value.toUpperCase() : value
        return newValue
    });
    console.log(usersObj);
}