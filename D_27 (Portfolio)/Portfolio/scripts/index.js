// TODO: Constants and variables
const author = document.querySelector(".author");
const skillDiv = document.querySelector(".skillsDiv");
const introTxt = document.querySelector(".introPara");
const techDiv = document.querySelector(".tech");

// Extracting data for Portfolio
let person = `${chudamaniChallenges2023.author.firstName} ${chudamaniChallenges2023.author.lastName}`;
let titlesList = [...chudamaniChallenges2023.author.titles];
let topicsList = chudamaniChallenges2023.challenges
    .map((course) => course.topics)
    .flat(1)
    .slice(0, 9);
let colors = [
    "green",
    "orange",
    "blue",
    "sky-blue",
    "purple",
    "light-green",
    "pink",
    "hotpink",
    "yellow",
];
let len = topicsList.length;
topicsList = topicsList.map((e, i) => [e, colors[i]]);
// Changing DOM
author.innerText = person;

// Tech DOM
{
    let topicLen = topicsList.length;
    let pointer = 0;
    const updateContent = () => {
        techDiv.style.opacity = "0";
        setTimeout(() => {
            techDiv.innerText = topicsList[pointer][0];
            techDiv.style.opacity = "1";
            techDiv.style.color = topicsList[pointer][1];
            pointer = (pointer + 1) % topicLen;
        }, 2000);
    };
    updateContent();
    setInterval(updateContent, 4000);
}

// Skills DOM
{
    let i = 0;
    const updateSkills = () => {
        skillDiv.childNodes[1].style.transform = 'translateX(0rem)'
        skillDiv.childNodes[1].style.opacity = '0'
        setTimeout(() => {
            skillDiv.childNodes[0].innerText = titlesList[i][0];
            skillDiv.childNodes[1].innerText = titlesList[i][1];
            skillDiv.childNodes[1].style.transform = 'translateX(2rem)'
            skillDiv.childNodes[1].style.opacity = '1'
            i = (i + 1) % titlesList.length;
        }, 2000);
    };
    updateSkills();
    setInterval(updateSkills,4000);
}
