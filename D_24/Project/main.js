const calcWt = (m, g) => {
    return (m * g).toFixed(2);
};

const planetData = {
    mercury: {
        img: "./images/mercury.png",
        g: 3.61,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    venus: {
        img: "./images/venus.png",
        g: 8.83,
        radius: 6.073 * 10 ** 6,
        mass: 4.88 * 10 ** 24,
    },
    earth: {
        img: "./images/earth.png",
        g: 9.8,
        radius: 6.4 * 10 ** 6,
        mass: 6 * 10 ** 24,
    },
    moon: {
        img: "./images/moon.png",
        g: 3.75,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    mars: {
        img: "./images/mars.png",
        g: 3.75,
        radius: 3.38 * 10 ** 6,
        mass: 6.42 * 10 ** 23,
    },
    jupiter: {
        img: "./images/jupiter.png",
        g: 26,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    saturn: {
        img: "./images/saturn.png",
        g: 11.2,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    uranus: {
        img: "./images/uranus.png",
        g: 10.5,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    neptune: {
        img: "./images/neptune.png",
        g: 13.3,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
    pluto: {
        img: "./images/pluto.png",
        g: 0.61,
        radius: 2.43 * 10 ** 6,
        mass: 3.2 * 10 ** 23,
    },
};
const planetImgWrapper = document.querySelector(".planetImg");
const planetImg = document.querySelector(".planetImg img");
const planet = document.querySelector("select");
const mass = document.querySelector("#mass");
const button = document.querySelector("#calcWt");
const contentTxt = document.querySelector(".contentTxt");
const contentErr = document.querySelector(".contentErr");
const wtTxt = document.querySelector(".weightTxt");
const wtCircle = document.querySelector(".weightCircle");

planet.addEventListener("change", () => {
    planetImgWrapper.style.display = "flex";
    contentTxt.style.display = 'none';
    planetImg.setAttribute("src", planetData[planet.value].img);
});
mass.addEventListener("change", () => {
    planetImgWrapper.style.display = "flex";
});

button.addEventListener("click", (e) => {
    let m;
    let g;
    if (/^\s*$/g.test(mass.value)) {
        planetImgWrapper.style.display = "none";
        contentTxt.style.display = "none";
        contentErr.style.display = "flex";
        contentErr.innerHTML = "Mass is required";
    } else if (isNaN(parseInt(mass.value))) {
        planetImgWrapper.style.display = "none";
        contentTxt.style.display = "none";
        contentErr.style.display = "flex";
        contentErr.innerHTML = "Mass should be in numbers";
    } else if (planet.value === "") {
        g = planetData.earth.g;
        m = parseInt(mass.value);
        wt = calcWt(m, g);
        contentErr.style.display = "none";
        contentTxt.style.display = "flex";
        planetImgWrapper.style.display = "flex";
        let planetName = "Earth".split("");
        planetName.forEach((e, i) => {
            if (i === 0) {
                planetName[i] = planetName[i].toUpperCase();
            }
        });
        planetName = planetName.join("");
        wtTxt.innerText = `${m} Kg of object on planet ${planetName} have weight:`;
        wtCircle.innerText = `${wt} Kg`;
    } else {
        g = planetData[planet.value].g;
        m = parseInt(mass.value);
        wt = calcWt(m, g);
        contentErr.style.display = "none";
        contentTxt.style.display = "flex";
        planetImgWrapper.style.display = "flex";
        let planetName = planet.value.split("");
        planetName.forEach((e, i) => {
            if (i === 0) {
                planetName[i] = planetName[i].toUpperCase();
            }
        });
        planetName = planetName.join("");
        wtTxt.innerText = `${m} Kg of object on planet ${planetName} have weight:`;
        wtCircle.innerText = `${wt} N`;
    }
});
console.log();
