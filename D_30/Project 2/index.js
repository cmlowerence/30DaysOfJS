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
console.log(isValidBio("Hey there. I am Chudamani. An Entrepreneur "))