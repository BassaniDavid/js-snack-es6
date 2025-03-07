
// array di oggetti
const bikeRaceArray = [
    // oggetti bici
    {
        nome: 'VAN RYSEL NCR CF SHIMANO 105 12V grigia',
        peso: 8.75,
    },
    {
        nome: ' TRIBAN RC 520 Microshift 10V',
        peso: 10.4,
    },
    {
        nome: 'Cannondale Supersix - 56',
        peso: 8.7,
    },

]

console.log(bikeRaceArray)

let lighter = 100;//variabile per confronto peso

let bikeLighter;//variabile per assegnazione dei dati della bici più leggera

// confronto il peso delle bici
for(let i = 0; i<bikeRaceArray.length; i++){
    if(bikeRaceArray[i].peso<lighter){
        lighter = bikeRaceArray[i].peso
        bikeLighter = bikeRaceArray[i]
    }
}

console.log(lighter)
console.log(bikeLighter)

// HTML elements
const pElement = document.querySelector('p')

pElement.innerHTML = `${bikeLighter.nome}, con un peso di ${bikeLighter.peso}`