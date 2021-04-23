var zucchine = [
    {
        varieta: "bella",
        peso: 100,
        lunghezza: 15
    },
    {
        varieta: "brutta",
        peso: 120,
        lunghezza: 16
    },
    {
        varieta: "bella",
        peso: 120,
        lunghezza: 10
    },
    {
        varieta: "bella",
        peso: 110,
        lunghezza: 20
    },
    {
        varieta: "storta",
        peso: 80,
        lunghezza: 17
    },
    {
        varieta: "brutta",
        peso: 130,
        lunghezza: 18
    },
    {
        varieta: "storta",
        peso: 100,
        lunghezza: 15
    },
    {
        varieta: "bella",
        peso: 90,
        lunghezza: 12
    },
    {
        varieta: "tonda",
        peso: 95,
        lunghezza: 13
    },
    {
        varieta: "tonda",
        peso: 100,
        lunghezza: 14
    }
];

var SOGLIA = 15;
var short = [];
var long = [];

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < SOGLIA) {
        short.push(zucchine[i]);
    } else {
        long.push(zucchine[i]);
    }
}

function calcTot(arr, chiave) {
    var totale = 0;
    for (var i = 0; i < arr.length; i++) {
        totale += arr[i][chiave];
    };
    return totale
}

var pesoCorte = calcTot(short, "peso");
var pesoLunghe = calcTot(long, "peso");


document.getElementById("myH1").innerHTML = "Il peso totale delle " + short.length + " zucchine corte è " + pesoCorte + " grammi.";
document.getElementById("myH1").innerHTML += "<br>Il peso totale delle " + long.length + " zucchine lunghe è " + pesoLunghe + " grammi.";