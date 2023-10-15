let countries;
const totalCountries = document.querySelector("#contCount");
const buttons = document.querySelectorAll(".btn");
const dataMsg = document.querySelector(".data_desc");
const dataBar = document.querySelector(".dataBar");

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
        totalCountries.innerText = `${data.length} countries`;
        // Q: Population List
        let population = [];
        data.forEach((e) => {
            population.push([e.name, e.population]);
        });
        population.sort((a, b) => b[1] - a[1]);
        const populationList = population.slice(0, 10);

        // ! Calculating Total World Population
        let worldPopulation = 0;
        for (let i = 0; i < population.length; i++) {
            worldPopulation += population[i][1];
        }

        // Q: Creating Population Elements
        let popWrapper = document.createElement("div");
        popWrapper.classList.add('popWrapper');
        for (let i = 0; i < populationList.length; i++) {
            let pop = document.createElement("span");
            pop.classList.add("population-element");
            {
                let countryName = document.createElement("span");
                countryName.innerText = populationList[i][0];
                pop.appendChild(countryName);

                let popBarWrapper = document.createElement("span");
                {
                    let popBar = document.createElement("span");
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
        // let langWrapper = document.createElement("div");
        // langWrapper.classList.add("langWrapper");
        // {
        //     for (let i = 0; i < langNCount.length; i++) {
        //         let langDiv = document.createElement("div"); // ! Parent
        //         langDiv.classList.add("langDiv");

        //         {
        //             let langName = document.createElement("span");
        //             langName.classList.add("langName");
        //             langName.innerText = langNCount[i][0];
        //             langDiv.appendChild(langName);

        //             let langBarDiv = document.createElement("span");
        //             langBarDiv.classList.add("langBarDiv");

        //             // ? Child
        //             {
        //                 let langBar = document.createElement("span");
        //                 langBar.style.backgroundColor = "hsl(39, 94%, 49%)";
        //                 langBar.style.width = `${langNCount[i][1]}%`;
        //                 langBar.classList.add("langBar");
        //                 langBarDiv.appendChild(langBar);
        //             }
        //             langDiv.appendChild(langBarDiv);

        //             let langOcc = document.createElement("span");
        //             langOcc.classList.add("langOcc");
        //             langOcc.innerText = langNCount[i][1];
        //             langDiv.appendChild(langOcc);
        //         }
        //         langWrapper.appendChild(langDiv);
        //     }
        // }
        // dataBar.appendChild(langWrapper);
    })
    .catch((err) => console.error(err));
