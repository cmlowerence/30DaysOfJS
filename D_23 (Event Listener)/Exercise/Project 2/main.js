const msgDiv = document.createElement("h1");
msgDiv.classList.add("msgDiv");

const msgTxt = document.createElement("span");
msgTxt.classList.add("msgTxt");
msgDiv.appendChild(msgTxt);
msgTxt.innerHTML = "Press some keyboard key";

const msgKey = document.createElement("span");
msgKey.classList.add("msgKey");
msgDiv.appendChild(msgKey);

const keyCode = document.createElement("h1");
keyCode.classList.add("keyCode");

document.body.appendChild(msgDiv);
document.body.appendChild(keyCode);

document.body.addEventListener("keydown", (e) => {
    msgTxt.innerHTML = "You pressed ";
    if (e.keyCode == 32){
        msgKey.innerText = 'Space'
    }else{
        msgKey.innerText = e.key;
    }
    msgKey.style.display = "block";

    keyCode.innerHTML = e.keyCode;
    keyCode.style.display = 'flex';
});
