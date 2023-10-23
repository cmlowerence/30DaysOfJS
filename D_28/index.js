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
    return `
    <div class = "candidate">
        <span class = "details">
            <span class = "name-wrapper">
                <span class = "name">${properCase(fName)} ${properCase(
        lName
    )}</span>
                <span class = "date">${date}</span>
            </span>
            <span class = "country">${properCase(country)}</span>
            <span class = "score">${score}</span>
        </span>
        <span class = "options">
            <button onclick = "rmCandidate" class="btn_round">🗑</button>
            <button onclick = "addScore" class="btn_round">+5</button>
            <button onclick = "rmScore" class="btn_round">-5</button>
        </span>
    </div>`;
};
console.log("hello");
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
        container.innerHTML += addCandidate(
            fName.value,
            lName.value,
            country.value,
            score.value
        );
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
