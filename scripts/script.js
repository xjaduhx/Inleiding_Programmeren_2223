var balkStatus = 0;
var welkeEvolutie = 0
var imageElement = document.querySelector('.debalk');
var eeveePlaatje = document.querySelector('.eevee');

// var evalurenKnop = document.querySelector('.evolvebutton');

function updateBalk(){
    if (balkStatus == 0){
        imageElement.src = "./images/Bar2.png";
        balkStatus = 20;
        console.log("ga de balk updaten")
    }

    else if (balkStatus == 20){
        imageElement.src = "./images/Bar3.png";
        balkStatus = 40;
        console.log("ga de balk updaten2")
    }

    else if (balkStatus == 40){
        imageElement.src = "./images/Bar4.png";
        balkStatus = 60;
        console.log("ga de balk updaten3")
    }

    else if (balkStatus == 60){
        imageElement.src = "./images/Bar5.png";
        balkStatus = 80;
        console.log("ga de balk updaten4")
    }
    
    else if (balkStatus == 80){
        imageElement.src = "./images/Bar6.png";
        balkStatus = 100;
        console.log("ga evalueren!")
    }

    else{

        if (welkeEvolutie == 0){
            eeveePlaatje.src = "./images/sylveon.jpeg";
            welkeEvolutie = 1;
            imageElement.src = "./images/bar0.png";
            balkStatus = 0;
            console.log("werkt dit?")
        }

        else if (welkeEvolutie == 1){
            eeveePlaatje.src = "./images/umbreon.jpeg";
            welkeEvolutie = 2;
            balkStatus = 0;
            imageElement.src = "./images/bar0.png";
        }
    }
}




var eersteKnop = document.querySelector('.eerste_knop');
eersteKnop.addEventListener('click', updateBalk);

var eersteKnop = document.querySelector('.tweede_knop');
eersteKnop.addEventListener('click', updateBalk);

var eersteKnop = document.querySelector('.derde_knop');
eersteKnop.addEventListener('click', updateBalk);

// var evalurenKnop = document.querySelector('.evolvebutton');
// evalurenKnop.addEventListener('click', updateBalk);


