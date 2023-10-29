const isValidName = (name) => {
    let r = /^[a-z A-Z \w]{3,20}$/g;
    return r.test(name);
};
const isValidEmail = (address) => {
    let r = /^[a-zA-Z0-9.$&%#!]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+$/g;
    return r.test(address);
};
const isValidPassword = (password) => {
    let r = /^[a-zA-Z0-9@#_-]{8,20}$/g;
    return r.test(password);
};
const isValidTelephone = (number) => {
    let r = /^[\d]{10,11}$/g;
    return r.test(number);
};
const isValidBio = (bio) => {
    let r = /^[,.a-zA-Z \w _-]{8,50}$/g;
    return r.test(bio);
};

// Fetching DOM Classes and ID's
const fname = document.querySelector("#fName");
const lname = document.querySelector("#lName");
const email = document.querySelector("#eMail");
const password = document.querySelector("#pswd");
const tel = document.querySelector("#tel_phone");
const bio = document.querySelector("#bio");
const smtBtnDiv = document.querySelector("#submit_btn");
const smtBtn = document.querySelector("#submit_btn");
const form = document.querySelector("#form");

// Checking Valid First Name
fname.addEventListener("input", function () {
    let value = fname.value.trim();
    if (value === "") {
        this.parentNode.classList.remove("invalid");
        this.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidName(value)) {
            this.parentNode.classList.remove("invalid");
            this.parentNode.classList.add("valid");
        } else {
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("invalid");
        }
    }
});

// Checking Valid Last Name
lname.addEventListener("input", function () {
    let value = lname.value.trim();
    if (value === "") {
        this.parentNode.classList.remove("invalid");
        this.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidName(value)) {
            this.parentNode.classList.remove("invalid");
            this.parentNode.classList.add("valid");
        } else {
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("invalid");
        }
    }
});

// Checking Valid eMail
email.addEventListener("input", function () {
    let value = email.value.trim();
    if (value === "") {
        this.parentNode.classList.remove("invalid");
        this.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidEmail(value)) {
            this.parentNode.classList.remove("invalid");
            this.parentNode.classList.add("valid");
        } else {
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("invalid");
        }
    }
});

// Checking Valid Password
password.addEventListener("input", function () {
    let value = password.value.trim();
    if (value === "") {
        this.parentNode.classList.remove("invalid");
        this.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidPassword(value)) {
            this.parentNode.classList.remove("invalid");
            this.parentNode.classList.add("valid");
        } else {
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("invalid");
        }
    }
});

// Checking Valid Telephone Number
tel.addEventListener("input", function () {
    let value = tel.value.trim();
    if (value === "") {
        this.parentNode.parentNode.classList.remove("invalid");
        this.parentNode.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidTelephone(value)) {
            this.parentNode.parentNode.classList.remove("invalid");
            this.parentNode.parentNode.classList.add("valid");
        } else {
            this.parentNode.parentNode.classList.remove("valid");
            this.parentNode.parentNode.classList.add("invalid");
        }
    }
});

// Checking Valid Bio
bio.addEventListener("input", function () {
    let value = bio.value.trim();
    if (value === "") {
        this.parentNode.classList.remove("invalid");
        this.parentNode.classList.remove("valid");
    } else if (value) {
        if (isValidBio(value)) {
            this.parentNode.classList.remove("invalid");
            this.parentNode.classList.add("valid");
        } else {
            this.parentNode.classList.remove("valid");
            this.parentNode.classList.add("invalid");
        }
    }
});

// if All the above fields are valid Then enabling Submit button
setInterval(() => {
    if (
        isValidName(fname.value) &&
        isValidName(lname.value) &&
        isValidEmail(email.value) &&
        isValidPassword(password.value) &&
        isValidTelephone(tel.value) &&
        isValidBio(bio.value)
    ) {
        smtBtn.removeAttribute("disabled");
        smtBtn.classList.add("validated");
    }else{
        smtBtn.setAttribute("disabled","");
        smtBtn.classList.remove("validated");
    }
},500)