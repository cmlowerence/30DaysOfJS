/* ============= Sets and Maps ============= */
// import { countries } from "./countries_data.js";
import countries from './countries_data.mjs';

console.log('main js is connected')
// Sets contains only unique elements
// Creating an empty set
const companies = new Set();
console.log(companies)

// Creating sets from a array
const languages = [
    'English',
    'Hindi',
    'Spanish',
    'Finnish',
    'French',
    'Chinese',
    'English',
    'French'
]
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);
// Here duplicate elements of the list are not taken in set as sets only takes unique items
// Sets are iterable, so we can iterate each element of a set as...
console.log('Iterating each and every element of a set using for loop...')
for (language of setOfLanguages) {
    console.log(language)
}


// adding new elements to a set
console.log('\n\nadding new elements to a set')
{
    const companies = new Set();
    console.log(companies.size);

    companies.add('Google');
    companies.add('Microsoft');
    companies.add('TATA');
    companies.add('Tesla');
    companies.add('Bharat Pay');
    console.log('Adding one by one \n ', companies);
    // We can do the same but using loops
    const comp_arr = ['Google', 'Microsoft', 'Apple', "Intel", 'Infosys', 'TATA'];
    comp_set = new Set();
    for (comp of comp_arr) {
        comp_set.add(comp)
    }
    console.log('using for loop \n', comp_set);
}
// Deleting elements from a set
{
    const companies = new Set();
    let list = ['Google', 'Microsoft', 'Tesla', 'TATA', 'Toyota', 'Hyundai'];
    for (item of list) {
        companies.add(item);
    }
    console.log('Previous set group-\n', companies)
    console.log(companies.size)
    companies.delete('Hyundai');
    console.log('After removing set element-\n', companies)

    // Checking an element in set
    console.log('checking weather MPL is in set')
    console.log(companies.has('MPL'));
    console.log('checking weather Google is in set')
    console.log(companies.has('Google'));


    // Clearing the set
    console.log('Set before clearing- \n', companies, companies.size);
    companies.clear();
    console.log('Set after clearing - \n', companies, companies.size);


}
// Using sets
console.log('Using Sets with all functionality...\n');
{
    const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
    ]
    const langSet = new Set(languages);
    console.log(langSet);
    console.log(langSet.size);

    const counts = [];
    const count = {};

    for (const l of langSet) {
        const filteredLang = languages.filter((lang) => lang === l);
        console.log('The filtered language set: ')
        console.log(filteredLang);
        counts.push({ lang: l, count: filteredLang.length })
    }
    console.log(counts);
}
// We can filtered out the unique elements using set as...
{
    let num = [1, 5, 3, 6, 4, 5, 3, 1, 9, 7, 5, 3];
    // Here some of the elements are repeating. We can eliminate them by making the above list a Set as...
    const filteredNum = new Set(num);
    console.log(filteredNum)
}
// Mathematical operations on Sets like union, intersection
{
    let a = [1, 2, 3, 4];
    let b = [6, 7, 8, 9];
    let c = [...a, ...b];
    let A = new Set(a);
    let B = new Set(b);
    let C = new Set(c);
    console.log('Set A:- ', A);
    console.log('Set B:- ', B);
    console.log('Union of Set A and B:---')
    console.log('Set C:- ', C);

}
// Intersection of Set A and B:-
{
    let a = [1, 2, 3, 4, 5];
    let b = [3, 4, 5, 6, 7];
    let A = new Set(a);
    let B = new Set(b);
    let c = a.filter((num) => B.has(num));
    let C = new Set(c);
    console.log('Intersection of A and B is \n', C);
}
// Difference in Sets
{
    let a = [1, 2, 3, 4, 5];
    let b = [3, 4, 5, 6, 7];
    let A = new Set(a);
    let B = new Set(b);
    let c = a.filter((num) => !B.has(num));
    let C = new Set(c);
    console.log('The difference in A and B, i.e. A-B:-    ');
    console.log(C);

}

// Creating an empty map
{
    const map = new Map()
    console.log(map);
}


// Creating map from an array
{
    let countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo'],
    ];

    const map = new Map(countries);
    console.log(map);
    console.log(map.size);

}
// Adding values to map
{
    const countriesMap = new Map();
    console.log(countriesMap.size);
    countriesMap.set('India', 'New Delhi');
    countriesMap.set('USA', 'Washington DC');
    countriesMap.set('Peru', 'Lima');
    console.log(countriesMap);
    console.log(countriesMap.size);

    // Getting value from a map

    console.log('Getting value from a map');

    console.log(countriesMap.get('India'));
}

// Map Operations
console.log('Map Operations');
{
    // Checking weather a key exist in the map

    const countriesMap = new Map([
        ['India', 'New Delhi'],
        ['USA', 'Washington DC'],
        ['England', 'London']
    ]
    )
    // Checking weather China is any key in Map
    console.log(countriesMap.has('China')); // False
    // Checking weather USA is any key in Map
    console.log(countriesMap.has('USA'));
    console.log(countriesMap)
    // Getting all values from map using loop
    for (const country of countriesMap) {
        console.log(country);
    }

    for (const [country, city] of countriesMap) {
        console.log(country, city);
    }

}


// Exercise: Level 1
{
    const a = [4, 5, 8, 9]
    const b = [3, 4, 5, 7]
    const countries = ['Finland', 'Sweden', 'Norway', 'West Indies']

    // Q1_ Create an empty set
    console.log('Q1_ Create an empty set.');
    let set = new Set();
    console.log('Empty set: ', set);
    console.log('\n')

    // Q_2 Create a set containing 0 10 using loop
    console.log('Q_2 Create a set containing 0 to 10 using loop')
    for (let i = 0; i <= 10; i++) {
        set.add(i);
    }
    console.log('Set containing 0 to 10:- ', set);
    console.log('\n')
    // Q3_ Remove an element from a set
    console.log('Q3_ Remove an element from a set')
    set.delete(5);
    console.log('Set with element 5 removed in it: ', set);

    // Q4_ Clear a set
    console.log('Q4_ Clearing a set:');
    set.clear();
    console.log('Cleared set: ', set);

    // Q5_ Create a set of 5 string elements from array
    console.log('Q5_ Create a set of 5 string elements from array')
    let arr = ['India', 'America', 'Africa', 'Indonesia', 'Europe']
    let another_set = new Set(arr);
    console.log('Set with 5 string elements: ', another_set);

    // Q6_ Create a map of countries and number of characters of a country
    console.log('Q6_ Create a map of countries and number of characters of a country');

    countries.forEach((e, i) => {
        e = [e, e.length]
        countries[i] = e
    })
    let map = new Map(countries);
    console.log('Map of countries and number fo characters of a country', map);

}
// Exercise Level 2
{
    // Q1_ Find a union b
    console.log('Q1_ Find a union b')

    let a = [1, 2, 3, 4]
    let b = [5, 6, 7, 8]
    let A = new Set(a)
    let B = new Set(b);
    let c = [...A, ...B]
    let C = new Set(c);
    console.log('a union b', C);

    // Q2_ Find a intersection b
    console.log('Q2_ Find a intersection b')
    c = [...A].filter((num) => B.has(num));
    C = new Set(c);
    console.log('a intersection b: ', C)

    // Q3_ Finding element which is in a but not in b
    console.log('Q3_ Finding element which is in a but not in b');
    C = new Set([...A].filter(x => !B.has(x)))
    console.log('Element which are in a but not in b are: ', C);
}

// Exercise Level 3
{
    // Q1_ How many languages are there in countries object file
    console.log('Q1_ How many languages are there in countries object file');
    let langArr = [];
    countries.forEach((e) => {
        langArr.push(e.languages);
    })
    langArr = langArr.flat(1)
    let langSet = new Set(langArr);
    console.log('We have ', langSet.size, ' languages total in countries_data file.')

    // Q2_ Use the countries data to find the 10 most spoken languages;
    let obj = new Object();
    langSet.forEach((a) => {
        obj[a] = langArr.filter(b => a === b).length;
    })
    console.log(obj)
    let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.log(sortedArr)
    const langList = [];
    for (let i = 0; i < sortedArr.length; i++) {
        let object = new Object()
        object[sortedArr[i][0]] = sortedArr[i][1];
        langList.push(object)
    }
    const mostSpokenLanguages = (countries, top_count) => {
        return countries.slice(0, top_count)
    }
    console.log(mostSpokenLanguages(langList, 10));
}
