// TODO: element constants
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const country = document.querySelector("#country");
const score = document.querySelector("#score");
const err = document.querySelector(".errorMsg");
const container = document.querySelector(".candidateContainer");
const smtBtn = document.querySelector(".btn");

// Q: Proper case conversion function
const properCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// ! Buttons Action functions
const rmCandidateFunc = (e) => {
    e.parentNode.parentNode.style.opacity = "0";
    e.parentNode.parentNode.style.padding = "0";
    e.parentNode.parentNode.style.transform = "scale(0)";
    setTimeout(() => {
        e.parentNode.parentNode.remove()
        window.localStorage.setItem("LeaderBoard", `${container.innerHTML}`);
    }, 700);
};
const addScoreFunc = (e) => {
    let scoreElement = e.parentNode.previousSibling.childNodes[2];
    scoreElement.innerText = 5 + +scoreElement.innerText;
    window.localStorage.setItem("LeaderBoard", `${container.innerHTML}`);
};
const subScoreFunc = (e) => {
    let scoreElement = e.parentNode.previousSibling.childNodes[2];
    scoreElement.innerText = -5 + +scoreElement.innerText;
    window.localStorage.setItem("LeaderBoard", `${container.innerHTML}`);
};

// Q: Element Function
const addCandidate = (fName, lName, country, score) => {
    let date = new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });
    const candidateDiv = document.createElement("div");
    candidateDiv.classList.add("candidate");
    {
        // Details Section
        const detailsDiv = document.createElement("span");
        detailsDiv.classList.add("details");
        // Name Wrapper
        const nameWrapper = document.createElement("span");
        nameWrapper.classList.add("name-wrapper");
        // Full Name Div
        const nameDiv = document.createElement("span");
        nameDiv.classList.add("name");
        nameDiv.innerText = properCase(fName) + " " + properCase(lName);

        // Date Div
        const dateDiv = document.createElement("span");
        dateDiv.classList.add("date");
        dateDiv.innerText = date;

        // Appending Child Elements to Parent Name Wrapper
        nameWrapper.appendChild(nameDiv);
        nameWrapper.appendChild(dateDiv);

        // Country Element
        const countryDiv = document.createElement("span");
        countryDiv.classList.add("country");
        countryDiv.innerText = properCase(country);

        // Score Element
        const scoreDiv = document.createElement("span");
        scoreDiv.classList.add("score");
        scoreDiv.innerText = properCase(score);

        // Appending Child Elements to Parent Details Section
        detailsDiv.appendChild(nameWrapper);
        detailsDiv.appendChild(countryDiv);
        detailsDiv.appendChild(scoreDiv);

        // Option Section
        const optionsDiv = document.createElement("span");
        optionsDiv.classList.add("options");

        // Removing Candidate Button
        const rmCandidateBtn = document.createElement("button");
        rmCandidateBtn.classList.add("btn_round");
        rmCandidateBtn.classList.add("rm_btn");
        rmCandidateBtn.setAttribute("title", "Remove Candidate");
        rmCandidateBtn.setAttribute("onclick", "rmCandidateFunc(this)");
        rmCandidateBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg>`;

        // Adding Score +5
        const addScoreBtn = document.createElement("button");
        addScoreBtn.classList.add("btn_round");
        addScoreBtn.classList.add("add_btn");
        addScoreBtn.setAttribute("title", "Score +5");
        addScoreBtn.setAttribute("onclick", "addScoreFunc(this)");
        addScoreBtn.innerText = "+5";

        // Subtracting Score -5
        const subScoreBtn = document.createElement("button");
        subScoreBtn.classList.add("btn_round");
        subScoreBtn.classList.add("sub_btn");
        subScoreBtn.setAttribute("title", "Score -5");
        subScoreBtn.setAttribute("onclick", "subScoreFunc(this)");
        subScoreBtn.innerText = "-5";

        // Appending Child Elements to Parent Options Section
        optionsDiv.appendChild(rmCandidateBtn);
        optionsDiv.appendChild(addScoreBtn);
        optionsDiv.appendChild(subScoreBtn);
        // Appending Child Elements to Parent Candidate
        candidateDiv.appendChild(detailsDiv);
        candidateDiv.appendChild(optionsDiv);
    }
    return candidateDiv;
};

smtBtn.addEventListener("click", () => {
    let isValidScore = !isNaN(parseInt(score.value));
    let intScore;
    if (isValidScore) {
        intScore = parseInt(score.value);
    }
    const isValidInput = (input) => {
        if (/^\w?$/g.test(input.value)) return false;
        else return true;
    };
    if (
        isValidInput(fName) &&
        isValidInput(lName) &&
        isValidInput(country) &&
        isValidScore
    ) {
        err.style.display = "none";
        container.appendChild(
            addCandidate(fName.value, lName.value, country.value, score.value)
        );
        window.localStorage.setItem("LeaderBoard", `${container.innerHTML}`);
        fName.value = "";
        lName.value = "";
        country.value = "";
        score.value = "";
    } else {
        err.style.display = "block";
        if (!isValidScore) {
            if (!isValidInput(score)) {
                err.innerText = "All fields are required";
            } else {
                err.innerText = "Score must be in numbers";
            }
        } else {
            err.innerText = "All fields are required";
        }
    }
});
// Q: Cached Data
if (window.localStorage.getItem("LeaderBoard")) {
    container.innerHTML = window.localStorage.getItem("LeaderBoard");
}
