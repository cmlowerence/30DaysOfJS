let countries;
const totalCountries = document.querySelector("#contCount");
const buttons = document.querySelectorAll(".btn");
const dataMsg = document.querySelector(".data_desc");
const dataBar = document.querySelector(".dataBar");
const dataLoader = document.querySelector(".dataLoader");
// ! Functions
// Q: Abbreviation function
function abb(word, omittedWords = ["of", "in", "as"]) {
    let abb = "";
    let wordList = word.split(" ");

    // ? Removing some unwanted word from the word list
    const filteredWords = wordList.filter(
        (word) => !omittedWords.includes(word.toLowerCase())
    );

    // Creating abbreviation if the word length is greater then 2
    if (filteredWords.length >= 2) {
        // Mapping through first element of each word and turning it to upper case
        const abbreviation = filteredWords
            .map((word) => word[0].toUpperCase())
            .join("");
        return abbreviation;
    } else return word;
}

if (buttons[0].classList.contains("active")) {
    dataMsg.innerText = "10 Most populated countries in the world";
} else if (buttons[1].classList.contains("active")) {
    dataMsg.innerText = "10 Most spoken languages in the world";
} else {
    dataMsg.innerText = "Click above buttons to look up for data";
}
buttons.forEach((e) => {
    e.addEventListener("click", () => {
        buttons.forEach((e) => {
            e.classList.remove("active");
        });
        e.classList.add("active");
    });
});

fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => {
        // TODO: Removing the loading Screen
        {
            dataLoader.style.opacity = 0;
            dataLoader.style.zIndex = -100;
        }

        totalCountries.innerText = `${data.length} countries`;
        buttons.forEach((e) => {
            e.addEventListener("click", () => {
                dataBar.innerHTML = "";
                dataMsg.innerText = "Click above buttons to look up for data";
                if (buttons[0].classList.contains("active")) {
                    dataMsg.innerText =
                        "10 Most populated countries in the world";
                } else if (buttons[1].classList.contains("active")) {
                    dataMsg.innerText = "10 Most spoken languages in the world";
                } else {
                    dataMsg.innerText =
                        "Click above buttons to look up for data";
                }
                if (buttons[0].classList.contains("active")) {
                    // TODO: Population List
                    let population = [];
                    data.forEach((e) => {
                        population.push([e.name, e.population]);
                    });
                    population.sort((a, b) => b[1] - a[1]);

                    // TODO: Calculating Total World Population
                    let worldPopulation = 0; // ! Total word population
                    for (let i = 0; i < population.length; i++) {
                        worldPopulation += population[i][1];
                    }
                    const populationList = [
                        ["World", worldPopulation],
                        ...population,
                    ].slice(0, 10);

                    // TODO: Creating Population Elements
                    let popWrapper = document.createElement("div");
                    popWrapper.classList.add("popWrapper");
                    let popListLen = populationList.length; // * Storing length of list in a variable
                    for (let i = 0; i < popListLen; i++) {
                        let pop = document.createElement("span");
                        pop.classList.add("population-element");
                        {
                            let countryName = document.createElement("span");
                            countryName.innerText = abb(populationList[i][0]);
                            pop.appendChild(countryName);
                            let popBarWrapper = document.createElement("span");
                            popBarWrapper.classList.add("popBarWrapper");
                            {
                                let popBar = document.createElement("span");
                                popBar.classList.add("popBar");
                                popBar.style.width = `${(
                                    (Math.floor(populationList[i][1]) /
                                        worldPopulation) *
                                    100
                                ).toFixed(2)}%`;
                                popBar.style.backgroundColor =
                                    "hsl(39, 94%, 49%)";
                                popBarWrapper.appendChild(popBar);
                            }
                            pop.appendChild(popBarWrapper);

                            let countryPop = document.createElement("span");
                            countryPop.innerText = populationList[i][1];
                            pop.appendChild(countryPop);
                        }
                        popWrapper.appendChild(pop);
                    }
                    dataBar.appendChild(popWrapper);
                } else if (buttons[1].classList.contains("active")) {
                    // Q: Languages List
                    let langNCount = []; // ! This list stores Top 10 languages spoken in world
                    {
                        let langs = [];
                        data.forEach((e) => {
                            let langNames = [];
                            e.languages.forEach((l) => {
                                langNames.push(l.name);
                            });
                            langs.push(...langNames);
                        });
                        const countMap = {};
                        for (let i = 0; i < langs.length; i++) {
                            const element = langs[i];
                            if (countMap[element] === undefined) {
                                countMap[element] = 1;
                            } else {
                                countMap[element]++;
                            }
                        }
                        for (const key in countMap) {
                            langNCount.push([key, countMap[key]]);
                        }
                        langNCount.sort((a, b) => b[1] - a[1]);
                        langNCount = langNCount.slice(0, 10);
                    }

                    // Q: Creating Languages Elements
                    let langWrapper = document.createElement("div");
                    langWrapper.classList.add("langWrapper");
                    {
                        for (let i = 0; i < langNCount.length; i++) {
                            let langDiv = document.createElement("div"); // ! Parent
                            langDiv.classList.add("langDiv");

                            {
                                let langName = document.createElement("span");
                                langName.classList.add("langName");
                                langName.innerText = langNCount[i][0];
                                langDiv.appendChild(langName);

                                let langBarDiv = document.createElement("span");
                                langBarDiv.classList.add("langBarDiv");

                                // ? Child
                                {
                                    let langBar =
                                        document.createElement("span");
                                    langBar.style.backgroundColor =
                                        "hsl(39, 94%, 49%)";
                                    langBar.style.width = `${langNCount[i][1]}%`;
                                    langBar.classList.add("langBar");
                                    langBarDiv.appendChild(langBar);
                                }
                                langDiv.appendChild(langBarDiv);

                                let langOcc = document.createElement("span");
                                langOcc.classList.add("langOcc");
                                langOcc.innerText = langNCount[i][1];
                                langDiv.appendChild(langOcc);
                            }
                            langWrapper.appendChild(langDiv);
                        }
                    }
                    dataBar.appendChild(langWrapper);
                }
            });
        });
    })
    .catch((err) => console.error(err));
