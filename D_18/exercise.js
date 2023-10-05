// Exercises
{
    const countriesAPI = 'https://restcountries.com/v2/all';
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';


    // Exercise Level 1
    {
        const Q_1 = 'Read the countries API using fetch and print the name of country, capital, languages, population and area'
        console.log('%cexercise.js line:10 Q_1', 'color: white; background-color: #007acc;', Q_1);
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

    // Exercise Level 2
    {
        const Q_1 = 'Print all the cat name in the catNames variable';
        let catNames = [];
        fetch(catsAPI)
        .then(response => response.json())
        .then((data)=>{
            console.log('%cexercise.js line:40 This is cat name list', 'color: white; background-color: #007acc;');
            for (const cat of data){
                catNames.push(cat.name)
            }
            console.log(catNames.join(', '))
        })
        .catch (err=>console.error(err))

    }

    // Exercise Level 3
    {
        const Q_1 = 'Read the cats api and find the average weight of cat in metric unit'
        console.log('%cexercise.js line:53 Q_1', 'color: white; background-color: #007acc;', Q_1);
        {
            fetch(catsAPI)
            .then(res=>res.json())
            .then(data=>{
                let allAvgWt = 0
                for (const cat of data){
                    let totalWt = 0;
                    let avgCatWt = cat.weight.metric.split('-')
                    for (const e in avgCatWt){
                        avgCatWt[e] = parseInt(avgCatWt[e])
                        totalWt += avgCatWt[e]
                    }
                    avgCatWt = totalWt/2
                    allAvgWt += avgCatWt
                }
                allAvgWt = allAvgWt/data.length
                console.log('Average weight of all cats is ',allAvgWt,' metric units')
            })
            .catch(err=>console.error(err))
        }

        const Q_2 = 'Read the countries api and find out the 10 largest countries';
        console.log('%cexercise.js line:76 Q_2', 'color: white; background-color: #007acc;', Q_2);
        {
            fetch(countriesAPI)
            .then(response=>response.json())
            .then(data=>{
                let areaArr = [];
                for (const country of data){
                    areaArr.push([country.name,country.area])
                }
                areaArr = areaArr.sort((a,b)=> b[1] - a[1])
                console.log(...areaArr.slice(0,10))
            })
        }

        const Q_3 = 'Read the countries api and count total number of languages in teh world used as officials'
        console.log('%cexercise.js line:91 Q_3', 'color: white; background-color: #007acc;', Q_3);
        {
            fetch(countriesAPI)
            .then(res=>res.json())
            .then(data=>{
                let worldLang = [];
                for (const country of data){
                    let langObj = country.languages
                    for (const lang of langObj){
                        if (!worldLang.includes(lang.name)){
                            worldLang.push(lang.name)
                        }
                    }
                }
                console.log(`In the world there are ${worldLang.length} languages used as officials`)
            })
        }
    }
}