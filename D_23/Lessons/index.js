const credentials = {
    Author: "Chudamani",
    Topic: "JavaScript : Event Listeners (DOM - Day : 3)",
    startDate: "11/10/2023",
    endDate: "/10/2023",
};
document.body.style.display = "grid";
document.body.style.gap = "1rem";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
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