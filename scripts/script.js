// console.log("Hallo Eevee");

// var feedbutton = document.querySelector("button")
// console.log(feedbutton);

// var sleepbutton = document.querySelector("ul:nth-of-type(1) li:nth-of-type(2) button")
// console.log(sleepbutton);

// var petbutton = document.querySelector(" ul:nth-of-type(1) li:nth-of-type(3) button")
// console.log(petbutton);

var balkStatus = 0;
// var balkStatusEvolutie1 = 0
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
        imageElement.src = "./images/bar0.png";
        eeveePlaatje.src = "./images/sylveon.jpeg";
        balkStatus = 0;
        welkeEvolutie = 1;
        console.log("werkt dit?")

        if (welkeEvolutie == 1){
            eeveePlaatje.src = "./images/sylveon.jpeg";
            welkeEvolutie = 2;
        }

        else if (welkeEvolutie == 2){
            eeveePlaatje.src = "./images/umbreon.jpeg";
            welkeEvolutie = 3;
        }
    }
}



// function updateBalkEersteEvolutie(){
//     if (balkStatus == 0){
//         imageElement.src = "./images/Bar2.png";
//         balkStatus = 20;
//         console.log("ga de balk updaten")
//     }

//     else if (balkStatus == 20){
//         imageElement.src = "./images/Bar3.png";
//         balkStatus = 40;
//         console.log("ga de balk updaten2")
//     }

//     else if (balkStatus == 40){
//         imageElement.src = "./images/Bar4.png";
//         balkStatus = 60;
//         console.log("ga de balk updaten3")
//     }

//     else if (balkStatus == 60){
//         imageElement.src = "./images/Bar5.png";
//         balkStatus = 80;
//         console.log("ga de balk updaten4")
//     }
    
//     else if (balkStatus == 80){
//         imageElement.src = "./images/Bar6.png";
//         balkStatus = 100;
//         console.log("ga evalueren!")
//     }

//     else{
//         imageElement.src = "./images/bar0.png"
//         eeveePlaatje.src = "./images/bar0.png" /*Wordt een plaatje van eerste Eevee evolutie*/
//         balkStatus = 0
//         welkeEvolutie = 2
//         console.log("werkt dit?")
//     }
// }   


var eersteKnop = document.querySelector('.eerste_knop');
eersteKnop.addEventListener('click', updateBalk);

var eersteKnop = document.querySelector('.tweede_knop');
eersteKnop.addEventListener('click', updateBalk);

var eersteKnop = document.querySelector('.derde_knop');
eersteKnop.addEventListener('click', updateBalk);

// var evalurenKnop = document.querySelector('.evolvebutton');
// evalurenKnop.addEventListener('click', updateBalk);


