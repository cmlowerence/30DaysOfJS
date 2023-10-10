const credentials = {
    Author: "Chudamani",
    Topic: "Document Object Model (DOM) - Day 2",
    startDate: "09/10/2023",
    endDate: "/10/2023",
};
// ! colors
const success = "#279b35";
const warning = "#fbb60e";
const danger = "#a1163f";
const mainHeading = document.querySelector("#mainHeading");
const subHeading = document.querySelector("#subHeading");
const dateTime = document.querySelector("#dateTime");
const container = document.querySelector("#container");
const colors = [
    "#FF7F50",
    "#B22222",
    "#FF69B4",
    "#FFFACD",
    "#ffc0cb",
    "#d72631",
    "#a2d5c6",
];
let i = 0;

// mainHeading
{
    const style = mainHeading.style;
    style.fontSize = "1.5rem";
    style.marginBlock = "1em";
    style.color = "#3e3e3e";
    const childStyle = mainHeading.childNodes[1].style;
    childStyle.fontSize = "2.325rem";
    i = 2;
    setInterval(() => {
        childStyle.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }, 1000);
}

// subHeading
{
}

// dateTime
{
    const dateTimeTxt = () =>
        new Date().toLocaleString("en-US", {
            day: "2-digit",
            weekday: "long",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    const style = dateTime.style;
    setInterval(() => {
        dateTime.textContent = dateTimeTxt();
        style.backgroundColor = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
        style.paddingBlock = "5px";
        style.paddingInline = "1rem";
        style.borderRadius = "8px";
        style.marginBlock = ".7rem";
        style.fontWeight = "600";
    }, 1000);
}

// container
{
    // * container Styles
    {
        let style = container.style;
        style.width = "80%";
    }

    //? challenges divisions
    {
        let challenges = document.createElement("div");

        // * challenges Div style
        {
            let style = challenges.style;
            style.display = "flex";
            style.flexDirection = "column";
            style.width = "100%";
            style.marginBlock = "1rem";
            style.gap = ".2rem";
        }
        let challenge;
        for (let i = 0; i < chudamaniChallenges2023.challenges.length; i++) {
            challenge = document.createElement("div");
            // * challenge div style`
            {
                let style = challenge.style;
                style.width = "100%";
                style.display = "flex";
                style.justifyContent = "space-between";
                style.paddingBlock = "1rem";
                style.paddingInline = "1.325rem";
                style.fontSize = "1.125rem";
            }
            {
                // ? Challenge Name Div
                {
                    let challengeName = document.createElement("span");
                    challengeName.innerText =
                        chudamaniChallenges2023.challenges[i].name;
                    challenge.appendChild(challengeName);
                    {
                        let style = challengeName.style;
                        style.textDecoration = "underline";
                        style.cursor = "pointer";
                    }
                }

                // ? Challenge Description Div
                {
                    let challengeDesc = document.createElement("details");
                    {
                        let style = challengeDesc.style;
                        style.cursor = "pointer";
                    }

                    // ? Detail Summary div
                    {
                        let detailSummary = document.createElement("summary");
                        detailSummary.innerText =
                            chudamaniChallenges2023.challenges[i].name
                                .split(" ")
                                .slice(3, 9)
                                .join(" ");
                        challengeDesc.appendChild(detailSummary);
                    }

                    // ? Detail list div
                    {
                        let detailElementList = document.createElement("ul");
                        // * detail ul style
                        {
                            let style = detailElementList.style;
                            style.listStyle = "none";
                            style.paddingBlock = ".5rem";
                        }
                        for (const topic of chudamaniChallenges2023.challenges[
                            i
                        ].topics) {
                            let element = document.createElement("li");
                            element.textContent = topic;
                            // * list element styling
                            {
                                let style = element.style;
                                style.paddingBlock = ".3rem";
                                style.paddingInline = ".4rem";
                                style.width = "100$";
                                style.borderBottom = "1px solid #bcbcbc";
                            }
                            detailElementList.appendChild(element);
                        }
                        challengeDesc.appendChild(detailElementList);
                    }
                    challenge.appendChild(challengeDesc);
                }

                // ? Challenge Status div
                {
                    const challengeStatus = document.createElement("span");
                    const status = chudamaniChallenges2023.challenges[i].status;
                    challengeStatus.innerText = status;

                    // ! Status effect style on div
                    {
                        const style = challenge.style;
                        if (status.toLowerCase() === "done") {
                            style.backgroundColor = success;
                        } else if (status.toLowerCase() === "ongoing") {
                            style.backgroundColor = warning;
                        } else {
                            style.backgroundColor = danger;
                        }
                    }
                    challenge.appendChild(challengeStatus);
                }
            }
            challenges.appendChild(challenge);
        }
        container.appendChild(challenges);
    }

    // ? About Div
    {
        const about = document.activeElement('div');
        
    }
}
