var name = "Jade";
var age = 20;
var dobbel = ['Jade', 'Elisa', 'Hardy', 'Merel'];

var persoon = {
    name: 'Jan',
    age: 32,
    auto: false,
    glas: ['kort', 'lang']
}

if (persoon.age >= 18) {
    console.log("Jij mag drinken", dobbel[0], persoon.name);
} else {
    console.log("Jij mag niet drinken")
}

