// D_17 Web Storages

// HTML 5 web storage
/* Web Storage (sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, includes in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting websites performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.
    The data being stored can be accessed using JavaScript, which gives you the ability to leverage client-side scripting to do many things that have traditionally involved server-side programming and relational databases. There are two Web Storage objects:

        => sessionStorage
        => localStorage

    localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends - that is, when the page is closed.

    It should be noted tat data stored in either localStorage or sessionStorage is specific to the protocol of the page.

    The keys and the values are always string (note that, as with objects, integer keys will be automatically converted to strings).
*/

// localStorage

/*
The HTML5 localStorage is the para of the web storage API which is used to store data on the browser with no expiration time. The dta will be available on the browser even after the browser is closed. localStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows.

WebStorage data is, in both cases, not available between different browsers. For example, storage objects created in Firefox cannot be accessed in Chrome, exactly like cookies. There are five methods to work on localStorage:

    => setItem()
    => getItem()
    => removeItem()
    => clear()
    => key()
*/

// Use case of Web Storage
/*
Some use case of Web Storages are:
    => store data temporarily
    => saving products that the user places in his shopping created
    => data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
    => can be used offline completely using localStorage
    => Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings and Base64 encoding.
    => can be used for user authentication method

In cases, we want to get rid of the data as soon as the window is closed, we will use sessionStorage. Or, perhaps, if we do not want the application to interfere with the same application that's open in another window. These scenarios are served best with sessionStorage.

Let us see how to make use of this web API
*/

// HTML5 Web Storage Objects

/* HTML Web Storage provides two objects for storing data on the client:
    > window.localStorage - stores data with no expiration date
    > window.sessionStorage - stores data for one session (data is lost when the browser tab is closed.) Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage.
*/
/*   => Web Storage objects:
        * localStorage - to display the localStorage object
        * localStorage.clear() - to remove everything in the local storage
        * localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
        * localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
        * localStorage.removeItem() - to remove stored item from a localStorage. It takes key as a parameter.
        * localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
    
*/

// Setting item to the localStorage
/* When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we loose the array structure or the object structure of the original data. */

// We store data in the localStorage using the localStorage.setItem() method
// Syntax
// localStorage.setItem('key','value');
// *Storing string in a localStorage
localStorage.setItem('firstName','Chudamani');
console.log(localStorage);

// * Storing Number in localStorage
localStorage.setItem('age',20);
console.log(localStorage);

// * Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first

const skills = ['HTML','CSS','JS','React'];
// Skills array has to be stringify first to keep the format.
const skillsJSON = JSON.stringify(skills,undefined,4);
localStorage.setItem('skills',skillsJSON);
console.log(localStorage);

let objSkills = [
    {tech: 'HTML', level: 10},
    {tech: 'CSS', level : 9},
    {tech: 'JS', level : 8},
    {tech: 'React', level : 9},
    {tech: 'Redux', level : 10},
    {tech: 'Node', level : 8},
    {tech: 'MongoDB', level : 8},

]
let objSkillsJSON = JSON.stringify(objSkills,undefined,4);
localStorage.setItem('skills1',objSkillsJSON);


// * Storing an object in a localStorage. Before we storage objects to a localStorage, teh object has to be stringified

const user = {
    firstName : 'Chudamani',
    age : 20,
    skills : ['HTML','CSS','JS','React']
}
const userTxt = JSON.stringify(user,undefined,4);
localStorage.setItem("user", userTxt);
console.log(localStorage);

// Getting item from localStorage

// syntax
// localStorage.getItem('key')

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skills1 = localStorage.getItem('skills')
console.log(firstName,age,skills1)

// Here skills list is in string format. Let us change it using json.parse()
let skillsObj = JSON.parse(localStorage.getItem('skills'),undefined,4)
console.log(skillsObj)

// Clearing localStorage
localStorage.clear()

// Exercises
{
    // Exercise Level 1
    console.log('%c Exercise Level 1', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 7px; padding: 5px;');
    {
        const Q_1 = 'Store your first name, last name, age, country, city in your browser localStorage'
        console.log('%cindex.js line:132 Q_1', 'color: white; background-color: #007acc;', Q_1);
        {
            localStorage.setItem('First Name','Chudamani');
            localStorage.setItem('Last Name','Lawrence');
            localStorage.setItem('Age',20);
            localStorage.setItem('Country','India');
            localStorage.setItem('City','Mandi');
            console.log('%cindex.js line:139 localStorage', 'color: white; background-color: #7acc; padding: 3px; border-radius: 3px; padding-inline: 6px;', localStorage);
        }
        localStorage.clear()
    }

    // Exercise Level 2
    console.log('%c Exercise Level 2', 'font-weight: bold; font-size: 20px;color: red; text-shadow: 1px 1px 0 rgb(217,31,38); margin-bottom: 7px; padding: 5px;');
    {
        const Q_1 = 'Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage';
        console.log('%cindex.js line:147 Q_1', 'color: white; background-color: #007acc;', Q_1);
        {
            const student = {
                firstName :'Rakesh',
                lastName : 'Lawrence',
                age : 20,
                skills : ['HTML','CSS','JS','React','MongoDB','Redux','Python','Flask','Django','Swift'],
                country : 'India'
            }

            let strStudent = JSON.stringify(student,undefined,4);
            localStorage.setItem('student',strStudent);
            console.log(localStorage)
        }
    }
}