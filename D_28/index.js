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
        rmCandidateBtn.innerText = "🗑";

        // Adding Score +5
        const addScoreBtn = document.createElement("button");
        addScoreBtn.classList.add("btn_round");
        addScoreBtn.innerText = "+5";

        // Subtracting Score -5
        const subScoreBtn = document.createElement("button");
        subScoreBtn.classList.add("btn_round");
        subScoreBtn.innerText = "-5";
        // Some Event Listeners on buttons
        rmCandidateBtn.addEventListener("click", () => candidateDiv.remove());
        addScoreBtn.addEventListener("click", () => {
            scoreDiv.innerText = 5 + +scoreDiv.innerText;
        });
        subScoreBtn.addEventListener("click", () => {
            scoreDiv.innerText = -5 + +scoreDiv.innerText;
        });

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
