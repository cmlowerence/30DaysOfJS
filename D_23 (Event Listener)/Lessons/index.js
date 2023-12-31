const credentials = {
    Author: "Chudamani",
    Topic: "JavaScript : Event Listeners (DOM - Day : 3)",
    startDate: "11/10/2023",
    endDate: "13/10/2023",
};
document.body.style.display = "grid";
document.body.style.gap = "1rem";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = '#3c3c3c';
document.body.style.color = '#fff';
document.body.style.fontFamily = "cursive";

// TODO : Event Listeners
/* 
? Common HTML events : onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event listener methods to any DOM object. We use addEventListener() method to listen different event types on HTML elements. The addEventListener() method takes two arguments, an event listener and a callback function.

! Syntax
*
selectedElement.addEventListener('addEventListener',function(e){
    ? the activity we want to occur after the event will be in here
*})
or
*
selectedElement.addEventListener('eventlistener',e=>{
    ? The activity we want to occur after the event will be in here
*})

*/

// TODO : Click
{
    /* 
? To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback function as argument.
* The following is an example click type event:- 
 */
    // ! Example click
    {
        const button = document.querySelector("button");
        button.addEventListener("click", (e) => {
            console.log("e gives the event listener object : ", e);
            console.log("e.target gives the selected element : ", e.target);
            console.log(
                "e.target.textContent gives content of selected element : ",
                e.target.textContent
            );
        });
    }
}
// * An event can be also attached directly to the HTML element as inline script.
// !Example of onclick in in index.html file and the function clickMe() is defined here:
const clickMe = () => {
    alert("We can attach event on HTML element");
};

// TODO : Double Click
{
    /*
? To attach event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

* The following is an example of double click event
*/
    // ! Example Double click
    {
        const button = document.querySelector("button");
        button.addEventListener("dblclick", (e) => {
            console.log(
                "%c e gives the event listener object : ",
                "color : red;",
                e
            );
            console.log(
                "%c e.target gives the selected element : ",
                "color : red;",
                e.target
            );
            console.log(
                "%c e.target.textContent gives content of selected element : ",
                "color : red;",
                e.target.textContent
            );
        });
    }
}

// TODO : Mouse enter
{
    /*
? To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

The following is an example of click type event.
*/

    // ! Example of mouseenter
    {
        const button = document.querySelector("button");
        button.addEventListener("mouseenter", (e) => {
            console.log("e gives the event listener object : ", e);
            console.log("e.target gives the selected element : ", e.target);
            console.log(
                "e.target.textContent gives content of selected element : ",
                e.target.textContent
            );
        });
    }
}

// * All eventListeners in js DOM
/*
? By now we are familiar with addEventListener method and how to attach event listener. There are man types of event listeners. But in this challenge we will focus the most common important events. List of events : 
{
    * click - when the element clicked
    * dblclick - when the element double clicked
    * mouseenter - when the mouse point enter to the element
    * mouseleave - when the mouse pointer leave the element
    * mousemove - when the mouse pointer move on the element
    * mouseover - when the mouse pointer move on the element
    * mouseout - when the mouse pointer out from the element
    * input - when value enter to input field
    * change - when value change on input field
    * blur - when the element is not focused
    * keydown - when a key is down
    * keyup - when a key is up
    * keypress - when we press any key`
    * onload - when the browser has finished loading a page
}
Let tyr them all: 
*/
// TODO : Mouse Leave
{
    // ! Example of mouseleave event
    {
        const button = document.createElement("button");
        button.innerText = "Mouse Leave";
        document.body.appendChild(button);
        button.addEventListener("mouseleave", (e) => {
            console.log("%c Mouse leave function triggered...", "color : red;");
        });
    }
}

// TODO : Mouse Move
{
    const button = document.createElement("button");
    button.innerText = "Mouse Move";
    document.body.appendChild(button);
    button.addEventListener("mousemove", (e) => {
        console.log("%c On mouse move function triggered", "color: orange;");
    });
}

// TODO : Mouse Over
{
    const button = document.createElement('button');
    button.innerText = 'Mouse over';
    document.body.appendChild(button);
    button.addEventListener('mouseover',(e)=>{
        console.log('%c Mouse over event triggered',"color : hotpink;")
    })
}

// TODO : Mouse Out
{
    const button = document.createElement('button');
    button.innerText = 'Mouse out';
    document.body.appendChild(button);
    button.addEventListener('mouseout',(e)=>{
        console.log('%c Mouse out event triggered',"color : cyan;")
    })
}

// TODO : Input
{
    const input = document.createElement('input');
    input.placeholder = 'Input';
    document.body.appendChild(input);
    input.addEventListener('input',(e)=>{
        console.log('%c Input event triggered...',"color : violet;")
    })
}

// TODO : Change
{
    const input = document.createElement('input');
    input.placeholder = 'Change';
    document.body.appendChild(input);
    input.addEventListener('change',(e)=>{
        console.log('%c Change event triggered...',"color : indigo;")
    })
}

// TODO : Blur
{
    const input = document.createElement('input');
    input.placeholder = 'Blur';
    document.body.appendChild(input);
    input.addEventListener('blur',(e)=>{
        console.log('%c Blur event triggered...',"color : green;")
    })
}

// TODO : Key down
{
    const input = document.createElement('input');
    input.placeholder = 'Key down';
    document.body.appendChild(input);
    input.addEventListener('keydown',(e)=>{
        console.log('%c Key down event is triggered...',"color : green;")
    })
}

// TODO : Key up
{
    const input = document.createElement('input');
    input.placeholder = 'Key up';
    document.body.appendChild(input);
    input.addEventListener('keyup',(e)=>{
        console.log('%c Key up event is triggered...',"color : red;")
    })
}

// TODO : Key Press
{
    const input = document.createElement('input');
    input.placeholder = 'Key press';
    document.body.appendChild(input);
    input.addEventListener('keypress',(e)=>{
        console.log('%c Key press event is triggered...',"color : blue;")
    })
}

// TODO : On load
{
    window.addEventListener('load',(e)=>{
        alert('The page is loaded...')
    })
}

// ? Getting value from an input element
/*
* We usually fill forms and forms accept data. Form fields are created using input HTML element. Let us build a small application which allow us to calculate body mass index of a person using two input fields, one button and one p tag
 */

// Q: Input value
{
    const mass = document.querySelector('#mass');
    const height = document.querySelector('#height');
    const button = document.querySelector('#bmi');
    let bmi;
    button.addEventListener('click',()=>{
        bmi = mass.value / height.value **2;
        alert(`Your bmi is ${bmi.toFixed(2)}`);
        console.log(bmi)
    })
}

// Q: input event and change
/*
    *In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without clicking the button. We can use the change or input event type to get data right away from the input field when the field is on focus. Let us see how we will handle that: 
*/
{
    // ! Using input event
    {
        const input = document.createElement('input');
        input.placeholder = 'Input Event';
        input.addEventListener('input',()=>{
            console.log('%c Input Event is triggered...',"color: red;")
        })
        document.body.appendChild(input);
    }
    // ! Using change event
    {
        const input = document.createElement('input');
        input.placeholder = 'Change Event';
        input.addEventListener('change',()=>{
            console.log('%c Change Event is triggered...',"color: green;")
        })
        document.body.appendChild(input);
    }
}

// Q: Blur event
// * In contrast to input or ChannelMergerNode, the blur event occur when the input field is not on focus.
{
    const blur = document.createElement('input');
    blur.placeholder = 'Blur Event';
    blur.addEventListener('blur',()=>{
        console.log('%c Blur event is triggered...',"color : orange;",blur.value)
    })
    document.body.appendChild(blur);
}

// Q: Keypress, keydown and keyup
// * We can access all the key numbers of the keyboard using different event listener types. Let us use keypress and get the keyCode of each keyboard keys.
{
    const keypress = document.createElement('p');
    document.body.addEventListener('keypress',(e)=>{
        console.log(e.key);
    })
}