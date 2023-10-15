const calcWt = (g,m)=>{
    return m*g
}

const planetData = {
    mercury : {
        img : "./images/mercury.png",
        g : 3.61,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    venus : {
        img : "./images/venus.png",
        g : 8.83,
        radius : 6.073 * 10**6,
        mass : 4.88 * 10**24
    },
    earth : {
        img : "./images/earth.png",
        g : 9.8,
        radius : 6.4 * 10**6,
        mass : 6 * 10**24
    },
    moon : {
        img : "./images/moon.png",
        g : 3.75,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    mars : {
        img : "./images/mars.png",
        g : 3.75,
        radius : 3.38 * 10**6,
        mass : 6.42 * 10**23
    },
    jupiter : {
        img : "./images/jupiter.png",
        g : 26,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    saturn : {
        img : "./images/saturn.png",
        g : 11.2,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    uranus : {
        img : "./images/uranus.png",
        g : 10.5,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    neptune : {
        img : "./images/neptune.png",
        g : 13.3,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    },
    pluto : {
        img : "./images/pluto.png",
        g : 0.61,
        radius : 2.43 * 10**6,
        mass : 3.2 * 10**23
    }
}
const planetImg = document.querySelector('.planetImg img');
let planet = document.querySelector('select');
planet.addEventListener('change',()=>{
    planetImg.setAttribute('src', planetData[planet.value].img)
})
