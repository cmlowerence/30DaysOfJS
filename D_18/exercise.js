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
            .then(res=>res.json())
            .then(data=>{
                for (const c of data){
                    console.log('Name:- ',c.name)
                    console.log('Capital:- ',c.capital)
                    let languages = [];
                    for (const langObj of c.languages){
                        languages.push(langObj.name);
                    }
                    console.log('Languages:- ',languages.join(', '))

                    console.log('Population:- ',c.population)
                    console.log('Area:- ',c.area)
                    console.log('\n\n========Separator=========') 
                }
            })
            .catch(err=>console.error(err))
        }
    }
}