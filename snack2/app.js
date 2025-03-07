
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
console.log('array di default')
console.log(soccerLeague)

// funzione per generare numeri
function randomGenerator() {
    return (Math.floor(Math.random() * 20))
}

// sostituzione degli zero con numeri randomici
for (let i = 0; i < soccerLeague.length; i++) {
    let soccerTeam = soccerLeague[i]

    for (let key in soccerTeam) {
        if (soccerTeam[key] === 0) {
            soccerTeam[key] = randomGenerator()
        }
    }
}
console.log('array con numeri generati')
console.log(soccerLeague)

// nuovo array con solo nomi e falli subiti
const soccerLeague2 = []

// ciclo per inserire oggetti nell'array
for (let i = 0; i < soccerLeague.length; i++) {
    let soccerTeam = soccerLeague[i]

    let soccerTeamBeta = {
        name: 0,
        foulPlaySuffer: 0,
    }

    soccerTeamBeta.name = soccerTeam.name
    soccerTeamBeta.foulPlaySuffer = soccerTeam.foulPlaySuffer
    soccerLeague2.push(soccerTeamBeta)
}

// stampo in console il secondo array
console.log('secondo array con solo nomi e falli')
console.log(soccerLeague2)