const arrayOfCountries = [
   { name: 'China', population: 1386395000 },
   { name: 'Costa Rica', population: 4905000 },
   { name: 'Brazil', population: 209288000 },
   { name: 'France', population: 67118000 },
   { name: 'Germany', population: 82695000 },
   { name: 'Finland', population: 5511300 },
   { name: 'Canada', population: 36290000 },
   { name: 'United States', population: 325700000 }
];

//using for each, loop through the arrayOfCountries
arrayOfCountries.forEach((country, i) => {
   console.log(country)
})

//using map, return an array of only the country names
console.log(arrayOfCountries.map((c) => c.name))

//using filter, return an array of countries with a population of over 10,000,000
console.log(arrayOfCountries.filter((c) => c.population > 10000000))

//using reduce, return an integer adding up all of the populations
console.log(arrayOfCountries.reduce((a, b) => a + b.population, 0))

const population = [
   'Brazil',
   'United States',
   'Costa Rica'
]
//using reduce and filter, find the average of the countries populations, only the countries in the population array
var filteredCountries = arrayOfCountries.filter((c) => population.indexOf(c.name) > -1);
var reducedCountries = filteredCountries.reduce((a, b) => a + b.population, 0)/population.length
console.log(reducedCountries)