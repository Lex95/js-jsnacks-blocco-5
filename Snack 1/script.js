var zucchine = [
    {
        varieta: "bella",
        peso:  100,
        lunghezza: 15
    },
    {
        varieta: "brutta",
        peso:  120,
        lunghezza: 16
    },
    {
        varieta: "bella",
        peso:  120,
        lunghezza: 10
    },
    {
        varieta: "bella",
        peso:  110,
        lunghezza: 20
    },
    {
        varieta: "storta",
        peso: 80,
        lunghezza: 17
    },
    {
        varieta: "brutta",
        peso:  130,
        lunghezza: 18
    },
    {
        varieta: "storta",
        peso:  100,
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
    {varieta: "tonda", peso:  100, lunghezza: 14}
    // posso anche fare tutto nella stessa riga così
];
var pesoTotale = 0;
for (var i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
};
document.getElementById("myH1").innerHTML = "Il peso totale delle " + zucchine.length + " zucchine è " + pesoTotale + " grammi.";