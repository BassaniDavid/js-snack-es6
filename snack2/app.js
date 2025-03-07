
// array contenente oggetti squadre
const soccerLeague = [
    {
        name: 'Sassuolo',
        score: 0,
        foulPlaySuffer: 0,
    },
    {
        name: 'Cagliari',
        score: 0,
        foulPlaySuffer: 0,
    },
    {
        name: 'Lecce',
        score: 0,
        foulPlaySuffer: 0,
    },
]
console.log(soccerLeague)

// funzione per generare numeri
function randomGenerator() {
    return (Math.floor(Math.random() * 20))
}

// sostituzione degli zero con numeri randomici
for (let i = 0; i < soccerLeague.length; i++) {
    let soccerTeam = soccerLeague[i]
    console.log(soccerTeam)

    for (let key in soccerTeam) {
        if(soccerTeam[key] === 0){
            soccerTeam[key] = randomGenerator()
        }
    }
}
console.log(soccerLeague)