// TODO : Variables and constants
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
const main = document.querySelector("main"); // * Main div where countries cards will be made;
const countriesCount = document.querySelector(".countriesCount"); // * Count of total countries
const desc = document.querySelector(".filteredCountriesDesc"); // * Description
const keyword = document.querySelector("#keyword");
const searchBtn = document.querySelector(".searchIcon");
const fButtons = document.querySelectorAll(".button"); // * All filter buttons
const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", () => {
    sortBtn.classList.toggle("descending");
    if (sortBtn.classList.contains("descending")) {
    }
});
// ? Entering Total countries
countriesCount.innerText = countries.length;

// ! Function to filter countries with any word
const filterAny = (wordArr, fKey) => {
    fKey = fKey.toLowerCase();
    let regex = new RegExp(`${fKey}`, "g");
    return wordArr.filter((word) => regex.test(word.toLowerCase()));
};

// ! Function to filter countries with specific starting word
const filterStart = (wordArr, fKey) => {
    fKey = fKey.toLowerCase();
    let regex = new RegExp(`^${fKey}`, "g");
    return wordArr.filter((word) => regex.test(word.toLowerCase()));
};

// ! Function to create span elements by data array
const dataElement = (dataArr, parent) => {
    dataArr.forEach((country) => {
        let element = document.createElement("span");
        element.classList.add("card");
        element.innerText = country;
        parent.appendChild(element);
    });
};

{
    fButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            fButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
        });
    });
}

// Q: Modifying DOM with data
let data;
keyword.addEventListener("input", function () {
    const fKey = this.value;
    main.innerHTML = "";
    if (fKey === "") {
        return;
    }
    if (fButtons[0].classList.contains("active")) {
        data = filterStart(countries, fKey);
        dataElement(data, main);
    } else if (fButtons[1].classList.contains("active")) {
        data = filterAny(countries, fKey);
        dataElement(data, main);
        // sortBtn.addEventListener("click", () => {
        //     main.innerHTML = "";
        //     data = data.sort();
        //     sortBtn.classList.toggle("descending");
        //     if (sortBtn.classList.contains("descending")) {
        //         let len = data.length;
        //         let newData = [];
        //         for (let i = len - 1; i >= 0; i--) {
        //             newData.push(data[i]);
        //         }
        //         console.log(newData)
        //         dataElement(newData, main);
        //     } else {
        //         dataElement(data, main);
        //     }
        // });
    } else {
        console.log("Error");
    }
});
sortBtn.addEventListener("click", () => {
    main.innerHTML = "";
    sortBtn.classList.toggle("descending");
    if (sortBtn.classList.contains("descending")) {
        let len = data.length;
        let newData = [];
        for (let i = len - 1; i >= 0; i--) {
            newData.push(data[i]);
        }
        sortBtn.setAttribute('title','Z to A')
        dataElement(newData, main);
    } else {
        sortBtn.setAttribute('title','A to Z')
        dataElement(data, main);
    }
});
