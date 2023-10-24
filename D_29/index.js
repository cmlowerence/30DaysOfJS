const bgColorList = [
    "#deb887",
    "#5252f0",
    "#e9dc69",
    "#daa520",
    "#5eda20",
    "#99338a",
    "#32a1e2",
];
const txtColorList = [
    "#8787df",
    "#df87b5",
    "#87b9df",
    "#87dfdf",
    "#6ed377",
    "#acde8a",
    "#e1de1a",
    "#e1771a",
    "#02f82b",
];
const fontList = [
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "'Times New Roman', Times, serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
];

const main = document.querySelector("main");
const txt = document.querySelector(".txt");
let arr = txt.innerText.split("");
let len = arr.length;
txt.innerText = "";
for (let i = 0; i < len; i++) {
    let span = document.createElement("span");
    span.innerText = arr[i];
    txt.appendChild(span);
}
console.log(txt.childNodes)
setInterval(() => {
    const randInd = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    document.body.style.backgroundColor = randInd(bgColorList);
    txt.style.fontFamily = randInd(fontList);
    txt.childNodes.forEach((e) => {
        e.style.color = randInd(txtColorList);
    });
}, 1000);
