
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
function randomGenerator () {
    return (Math.floor(Math.random() * 20))
}