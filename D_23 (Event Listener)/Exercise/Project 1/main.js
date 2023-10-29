// Q: Project Functions
const isEven = (num) => {
    if (num % 2 === 0) return true;
    return false;
};
const isOdd = (num) => {
    if (!(num % 2 === 0)) return true;
    return false;
};
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const checkEmpty = (e) => {
    if (/^\s*$/g.test(e)) return true;
    return false;
};
const checkNaN = (e) => {
    if (isNaN(parseInt(e))) return true;
    return false;
};
const wrapper = document.querySelector(".wrapper");

// ? Adding input field and buttons
const msgDiv = document.createElement("span");
msgDiv.innerText = "One";
msgDiv.classList.add("msgDiv");

const inputWrapper = document.createElement("div");
inputWrapper.classList.add("inputWrapper");

const input = document.createElement("input");
input.setAttribute("type", "text");
inputVal = parseInt(input.value);
input.setAttribute("placeholder", "Generate numbers till...");
input.classList.add("input");

const button = document.createElement("button");
button.classList.add("button");
button.innerText = "Generate Number";

// ! Appending child to parent element
{
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(button);
}
const numContainer = document.createElement("div");
numContainer.classList.add("numContainer");

// TODO : Number Elements
let numCount = 50;

// ! Function of creating required number of elements
const addNum = (numCount, parent) => {
    parent.innerHTML = "";
    for (let i = 0; i <= numCount; i++) {
        let e = document.createElement("span");
        e.classList.add("numElement");
        e.innerText = i;
        if (isPrime(parseInt(e.innerText))) {
            e.classList.add("prime");
        } else if (isEven(parseInt(e.innerText))) {
            e.classList.add("even");
        } else {
            e.classList.add("odd");
        }
        parent.appendChild(e);
    }
    return;
};
addNum(numCount, numContainer);
button.addEventListener("click", () => {
    if (checkEmpty(input.value)) {
        console.log("Empty input");
        msgDiv.innerText = "Add the number value in the input field first...";
        msgDiv.style.opacity = "100";
        input.value = "";
    } else if (checkNaN(input.value)) {
        msgDiv.innerText = "The input should only be any number...";
        msgDiv.style.opacity = "100";
        input.value = "";
        return;
    } 
    else if (input.value < 0){
        msgDiv.innerText = 'Positive numbers only...'
        input.value = "";
        msgDiv.style.opacity = "100";
    }
    else {
        intInput = parseInt(input.value);
        addNum(intInput, numContainer);
        msgDiv.style.opacity = "0";
        msgDiv.innerText = "One";
        input.value = "";
    }
});

// numContainer.childNodes.forEach(e=>{
//     if (isPrime(parseInt(e.innerText))){
//         e.classList.add('prime');
//     }else if (isEven(parseInt(e.innerText))){
//         e.classList.add('even');
//     }else{
//         e.classList.add('odd');
//     }
// })

{
    wrapper.appendChild(msgDiv);
    wrapper.appendChild(inputWrapper);
    wrapper.appendChild(numContainer);
}
document.body.appendChild(wrapper);
