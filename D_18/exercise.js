// Exercises
{
    const countriesAPI = 'https://restcountries.com/v2/all';
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';


    // Exercise Level 1
    {
        const Q_1 = 'Read the countries API using fetch and print the name of country, capital, languages, population and area'
        console.log('%cindex.js line:232 Q_1', 'color: white; background-color: #007acc;', Q_1);
        {
            fetch(countriesAPI)
            .then(res=>res.json)
            .then(data=>{
                console.log(data)
            })
        }
    }
}