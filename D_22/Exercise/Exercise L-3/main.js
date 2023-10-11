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
const colors = [
    "#FF7F50",
    "#BBd2fd",
    "#FF69B4",
    "#FFFACD",
    "#ffc0cb",
    "#d9d6ab",
    "#a2d5c6",
];
// ! Random Hex color code function
const randomHex = ()=>{
    let hexCodes = '0123456789abcdef';
    let hexCode= '#';
    for (let i = 0;i<6;i++){
        let char = hexCodes.charAt(Math.floor(Math.random()*hexCodes.length));
        hexCode += char
    }
    return hexCode;
}

// ! HTML Elements
const mainHeading = document.querySelector("#mainHeading");
const subHeading = document.querySelector("#subHeading");
const dateTime = document.querySelector("#dateTime");
const container = document.querySelector("#container");
let i = 0;

// ? mainHeading
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

// ? subHeading
{
}

// ? dateTime
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
        style.width = "70%";
    }

    // ? challenges divisions
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
        let about = document.createElement("div");
        // * about style
        {
            let style = about.style;
            style.width = "100%";
            style.display = "flex";
            style.flexDirection = "column";
            style.alignItems = "center";
            style.marginBlock = "1rem";
            style.color = "#3c3c3c";
        }
        container.appendChild(about);

        // ! spreading Author object
        let {
            firstName,
            lastName,
            titles,
            qualifications,
            socialLinks,
            bio,
            skills,
        } = chudamaniChallenges2023.author;

        // TODO : Author Name Div
        {
            let authorName = document.createElement("h1");
            authorName.innerText = `${firstName} ${lastName}`;

            // * authorName Style
            {
                let style = authorName.style;
            }
            about.appendChild(authorName);
        }

        // TODO : Author Social links
        {
            let socialDiv = document.createElement("h2");

            // * socialDiv Style
            {
                const style = socialDiv.style;
                style.display = "flex";
                style.gap = "1rem";
                style.marginBlock = ".5rem";
            }

            for (let i = 0; i < socialLinks.length; i++) {
                let social = socialLinks[i].fontawesomeIcon;
                let socialAnchor = document.createElement("a");
                socialAnchor.setAttribute("href", socialLinks[i].url);
                socialAnchor.innerHTML = social;

                // * socialAnchor style
                {
                    let style = socialAnchor.style;
                    style.color = "inherit";
                    style.fontSize = "2rem";
                }
                socialDiv.appendChild(socialAnchor);
            }
            about.appendChild(socialDiv);
        }

        // TODO : Author Bio
        {
            const bioDiv = document.createElement("p");
            bioDiv.innerText = bio;

            // * bidDiv style
            {
                const style = bioDiv.style;
                style.width = "100%";
                style.textAlign = "center";
                style.fontSize = "1.125rem";
                style.marginBlock = "1.5rem";
            }
            about.appendChild(bioDiv);
        }

        // TODO : Info Div
        {
            const info = document.createElement("div");

            // * info style
            {
                const style = info.style;
                style.display = "flex";
                style.width = "100%";
                style.justifyContent = "space-between";
            }

            // TODO : Titles div
            {
                const titlesDiv = document.createElement("span");
                // * title style
                {
                    const style = titlesDiv.style;
                    style.display = "flex";
                    style.flexDirection = "column";
                    style.gap = "1rem";
                }

                // ? titleHeading
                {
                    let titleHeading = document.createElement("h3");
                    titleHeading.innerText = "Titles";

                    // * titleHeading style
                    {
                        let style = titleHeading.style;
                    }
                    titlesDiv.appendChild(titleHeading);
                }

                // ? title Titles
                {
                    let titlesWrapper = document.createElement("div");

                    // * titlesWrapper style
                    {
                        const style = titlesWrapper.style;
                    }
                    for (let i = 0; i < titles.length; i++) {
                        let title = document.createElement("div");
                        title.innerText = `${titles[i][0]} ${titles[i][1]}`;

                        // * titleElement style
                        {
                            let style = title.style;
                            style.fontSize = "1.125rem";
                        }
                        titlesWrapper.appendChild(title);
                    }
                    titlesDiv.appendChild(titlesWrapper);
                }
                info.appendChild(titlesDiv);
            }

            // TODO : Skills div
            {
                const skillsDiv = document.createElement("span");

                // * skills style
                {
                    const style = skillsDiv.style;
                    style.display = "flex";
                    style.flexDirection = "column";
                    style.gap = "1rem";
                }

                // ? Skills Heading
                {
                    let skillsHeading = document.createElement("h3");
                    skillsHeading.innerText = "Skills";

                    // * skillsHeading style
                    {
                        let style = skillsHeading.style;
                    }
                    skillsDiv.appendChild(skillsHeading);
                }

                // ? skillsWrapper
                {
                    const skillsWrapper = document.createElement("div");

                    // * skillsWrapper style
                    {
                        const style = skillsWrapper.style;
                        style.fontSize = "1.125rem";
                    }
                    for (let i = 0; i < skills.length; i++) {
                        let skill = document.createElement("div");
                        skill.innerText = `✅ ${skills[i]}`;

                        // * skill Elements style
                        {
                            const style = skill.style;
                            style.marginBlock = ".3rem";
                        }
                        skillsWrapper.appendChild(skill);
                    }
                    skillsDiv.appendChild(skillsWrapper);
                }
                info.appendChild(skillsDiv);
            }

            // TODO : Qualification div
            {
                const qualificationsDiv = document.createElement("span");

                // * qualifications style
                {
                    const style = qualificationsDiv.style;
                    style.display = "flex";
                    style.flexDirection = "column";
                    style.gap = "1rem";
                }

                // ? Qualification Heading
                {
                    let qualificationsHeading = document.createElement("h3");
                    qualificationsHeading.innerText = "Qualifications";

                    // * Qualification Heading Style
                    {
                        const style = qualificationsHeading.style;
                    }
                    qualificationsDiv.appendChild(qualificationsHeading);
                }
                // ? Qualification Wrapper
                {
                    const qualificationsWrapper = document.createElement("div");

                    // * qualificationsWrapper style
                    {
                        const style = qualificationsWrapper.style;
                        style.fontSize = "1.125rem";
                    }
                    for (let i = 0; i < qualifications.length; i++) {
                        let qualification = document.createElement("div");
                        qualification.innerText = `🔭 ${qualifications[i]}`;

                        // * qualification style
                        {
                            const style = qualification.style;
                        }
                        qualificationsWrapper.appendChild(qualification);
                    }
                    qualificationsDiv.appendChild(qualificationsWrapper);
                }
                info.appendChild(qualificationsDiv);
            }
            about.appendChild(info);
        }

        // TODO : Keywords Div
        {
            const keywordsWrapper = document.createElement("div");

            // * keywordsWrapper Style
            {
                const style = keywordsWrapper.style;
                style.width = "100%";
                style.display = "flex";
                style.flexWrap = "wrap";
                style.marginBlock = "2rem";
                style.justifyContent = 'space-between';
                style.gap = ".5rem";
            }

            let colorIndex = 0;
            for (let i = 0; i < chudamaniChallenges2023.keywords.length; i++) {
                const keyword = document.createElement("span");
                keyword.innerText = `#${chudamaniChallenges2023.keywords[i]}`;

                // * keyword style
                {
                    const style = keyword.style;
                    style.backgroundColor = randomHex();
                    style.color = '#fff';
                    style.cursor = "pointer";
                    style.padding = ".43rem";
                    style.paddingInline = '1rem'
                    style.borderRadius = ".8rem";
                    style.fontWeight = '600';
                    style.flexGrow = '1';
                    style.textAlign = 'center';
                    style.textShadow = `1px 1px 2px rgb(0, 0, 0, .6)`;
                }
                keywordsWrapper.appendChild(keyword);
            }

            about.appendChild(keywordsWrapper);
        }
    }
}
