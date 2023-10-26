fetch("https://restcountries.com/v3.1/all?fields=name,languages,flags,population,capital")
.then(res=> res.json())
.then (data=> console.log(data))