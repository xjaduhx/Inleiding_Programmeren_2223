var balkStatus = 0;
var welkeEvolutie = 0
var imageElement = document.querySelector('.debalk');
var eeveePlaatje = document.querySelector('.eevee');


function updateBalk(){
    if (balkStatus == 0){
        imageElement.src = "./images/Bar2.png";
        balkStatus = 20;
        console.log("ga de balk updaten")
        document.querySelector('.eerste_knop').disabled = false;
        document.querySelector('.tweede_knop').disabled = false;
        document.querySelector('.derde_knop').disabled = false;
        document.querySelector('#evolvebuttonid').disabled = true;
    }

    else if (balkStatus == 20){
        imageElement.src = "./images/Bar3.png";
        balkStatus = 40;
        console.log("ga de balk updaten2")
        document.querySelector('.eerste_knop').disabled = false;
        document.querySelector('.tweede_knop').disabled = false;
        document.querySelector('.derde_knop').disabled = false;
        document.querySelector('#evolvebuttonid').disabled = true;
    }

    else if (balkStatus == 40){
        imageElement.src = "./images/Bar4.png";
        balkStatus = 60;
        console.log("ga de balk updaten3")
        document.querySelector('.eerste_knop').disabled = false;
        document.querySelector('.tweede_knop').disabled = false;
        document.querySelector('.derde_knop').disabled = false;
        document.querySelector('#evolvebuttonid').disabled = true;
    }

    else if (balkStatus == 60){
        imageElement.src = "./images/Bar5.png";
        balkStatus = 80;
        console.log("ga de balk updaten4")
        document.querySelector('#evolvebuttonid').disabled = true;
        document.querySelector('.eerste_knop').disabled = false;
        document.querySelector('.tweede_knop').disabled = false;
        document.querySelector('.derde_knop').disabled = false;
    }
    
    else if (balkStatus == 80){
        imageElement.src = "./images/Bar6.png";
        balkStatus = 100;
        console.log("ga evalueren!")
        document.querySelector('.eerste_knop').disabled = true;
        document.querySelector('.tweede_knop').disabled = true;
        document.querySelector('.derde_knop').disabled = true;
        document.querySelector('#evolvebuttonid').disabled = false;
    }

    else{

        if (welkeEvolutie == 0){
            eeveePlaatje.src = "./images/vaporeon.PNG";
            welkeEvolutie = 1;
            imageElement.src = "./images/bar0.png";
            balkStatus = 0;
            console.log("werkt dit?")
            document.querySelector('#evolvebuttonid').disabled = true;
            document.querySelector('.eerste_knop').disabled = false;
            document.querySelector('.tweede_knop').disabled = false;
            document.querySelector('.derde_knop').disabled = false;
            // eventesten = 0;
        }

        else if (welkeEvolutie == 1){
            eeveePlaatje.src = "./images/umbreon.jpeg";
            welkeEvolutie = 2;
            balkStatus = 0;
            imageElement.src = "./images/bar0.png";
            document.querySelector('#evolvebuttonid').disabled = true;
            document.querySelector('.eerste_knop').disabled = false;
            document.querySelector('.tweede_knop').disabled = false;
            document.querySelector('.derde_knop').disabled = false;
        }
    }
}
function handleSubmit(){
    console.log('hallo');
}
function barking(){
    document.getElementById('barking').play()
    document.getElementById('barking').3();
}

function sleepeevee(){

    if (welkeEvolutie == 0){
        eeveePlaatje.src = "./images/eeveesleep.PNG";
    }
    
    else if (welkeEvolutie == 1){
        eeveePlaatje.src = "./images/vaporeonsleep.PNG";
    }

    else if (welkeEvolutie == 2){
        eeveePlaatje.src = "./images/umbreon.jpeg";
    }
}

function feedeevee(){

    if (welkeEvolutie == 0){
        eeveePlaatje.src = "./images/eeveefood.PNG";
    }
    
    else if (welkeEvolutie == 1){
        eeveePlaatje.src = "./images/vaporeoneat.PNG";
    }

    else if (welkeEvolutie == 2){
        eeveePlaatje.src = "./images/umbreon.jpeg";
    }
}

function playeevee(){
    eeveePlaatje.src = "./images/eeveeplay.PNG";

    if (welkeEvolutie == 0){
        eeveePlaatje.src = "./images/eeveeplay.PNG";
    }
    
    else if (welkeEvolutie == 1){
        eeveePlaatje.src = "./images/vaporeonplay.PNG";
    }

    else if (welkeEvolutie == 2){
        eeveePlaatje.src = "./images/umbreon.jpeg";
    }
}





/* Dit is het stukje waarbij als de gebruiker een naam invult, de h2 vervanderd in de ingevulde naam*/
var input = document.querySelector("input");
var p = document.querySelector(".jouwnaam");
var button = document.querySelector(".naamkiezen");
button.addEventListener("click", () => {
    p.textContent = input.value;
});





/*Array*/
var buttonDing = document.querySelector('.randomspeelgoed');
/*Button wordt hier opgehaald uit de html*/
buttonDing.addEventListener("click", randomPlaatje);
/*Button krijgt een click eventlistener, hierna voert hij de functie randomPlaatje uit*/

function randomPlaatje(){
    var imageChange = ['./images/voetbal.png', './images/champagne.png', './images/sylveon.jpeg'];
    /*Array wordt aangemaakt in een variabele*/
    var randomIndex = Math.floor(Math.random()*3);
    /*Hier wordt het gekozen getalen door de computer afgerond naar beneden en hij moet tussen het getal 0 en 3 zitten*/
    document.querySelector('.speelgoedje').src = imageChange[randomIndex];
    /*Hier wordt de class voor de image opgehaald en gezegd dat de src moet veranderen in het gekozen nummer (0-3) die gekoppeld is aan een bepaald
    plaatje in de imageChange var*/
}




/*Deze variable worden aangemaakt om ervoor te zorgen dat de button classes luisteren naar de eventlistener, nameliijk de click op de button*/ 
var eersteKnop = document.querySelector('.eerste_knop');
eersteKnop.addEventListener('click', updateBalk,);
eersteKnop.addEventListener('click', feedeevee);

var eersteKnop = document.querySelector('.tweede_knop');
eersteKnop.addEventListener('click', updateBalk);
eersteKnop.addEventListener('click', sleepeevee);

var eersteKnop = document.querySelector('.derde_knop');
eersteKnop.addEventListener('click', updateBalk);
eersteKnop.addEventListener('click', playeevee);
eersteKnop.addEventListener('click', barking);





var eventesten = document.querySelector("#evolvebuttonid");
eventesten.addEventListener('click', updateBalk) 
/* Als je op de button klikt van evolve, evolved eevee wel naar sylveon. Maar als je dan nog een keer op een button klikt gaat
hij weer terug naar eevee in plaats van verder met sylveon. Dit komt omdat ik een eventlistener heb gehangen aan de buttons.*/
console.log(eventesten);
if (balkStatus == 100) {
    eventesten.removeAttribute("disabled")
};



