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
            eeveePlaatje.src = "./images/umbreon.PNG";
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



function barking(){

    if (welkeEvolutie == 0){
        document.getElementById('barkingeevee').play();
    }

    else if (welkeEvolutie == 1){
        document.getElementById('splashvaporeon').play();
    }

    else if (welkeEvolutie == 2){
        document.getElementById('playumbreon').play();
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
}

function sleeping(){
    if (welkeEvolutie == 0){
        document.getElementById('sleepingeevee').play();
    }

    else if (welkeEvolutie == 1){
        document.getElementById('sleepvaporeon').play();
    }

    else if (welkeEvolutie == 2){
        document.getElementById('sleepumbreon').play();
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
}

function eating(){
    if (welkeEvolutie == 0){
        document.getElementById('eatingeevee').play();
    }

    else if (welkeEvolutie == 1){
        document.getElementById('eatvaporeon').play();
    }

    else if (welkeEvolutie == 2){
        document.getElementById('eatumbreon').play();
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
}

function sleepeevee(){

    if (welkeEvolutie == 0){
        eeveePlaatje.src = "./images/eeveesleep.PNG";
    }
    
    else if (welkeEvolutie == 1){
        eeveePlaatje.src = "./images/vaporeonsleep.PNG";
    }

    else if (welkeEvolutie == 2){
        eeveePlaatje.src = "./images/umbreonsleep.PNG";
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
}

function feedeevee(){

    if (welkeEvolutie == 0){
        eeveePlaatje.src = "./images/eeveefood.PNG";
    }
    
    else if (welkeEvolutie == 1){
        eeveePlaatje.src = "./images/vaporeoneat.PNG";
    }

    else if (welkeEvolutie == 2){
        eeveePlaatje.src = "./images/umbreoneat.png";
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
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
        eeveePlaatje.src = "./images/Umbreonplay.PNG";
    }
    /* Bij welkeEvolutie 0 gaat het om eevee, bij 1 om vaporeon en om 2 bij Umbreon*/
}





/* Dit is het stukje waarbij als de gebruiker een naam invult, de h2 vervanderd in de ingevulde naam
Hier heeft een klasgenoot mee geholpen, zij is mijn bron.*/
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
    var imageChange = ['./images/pokeball.PNG', './images/drankje.PNG', './images/plant.PNG', './images/croissant.PNG', './images/voetbal.png'];
    /*Array wordt aangemaakt in een variabele*/
    var randomIndex = Math.floor(Math.random()*5);
    /*Hier wordt het gekozen getalen door de computer afgerond naar beneden en hij moet tussen het getal 0 en 3 zitten*/
    document.querySelector('.speelgoedje').src = imageChange[randomIndex];
    /*Hier wordt de class voor de image opgehaald en gezegd dat de src moet veranderen in het gekozen nummer (0-3) die gekoppeld is aan een bepaald
    plaatje in de imageChange var*/
}




/*Deze variable worden aangemaakt om ervoor te zorgen dat de button classes luisteren naar de eventlistener, nameliijk de click op de button*/ 
/*David de Vries (docent CMD heeft mij met deze code geholpen. Ik snap wat hij mij heeft uitgelegd.)*/
var eersteKnop = document.querySelector('.eerste_knop');
eersteKnop.addEventListener('click', updateBalk,);
eersteKnop.addEventListener('click', feedeevee);
eersteKnop.addEventListener('click', eating);

var eersteKnop = document.querySelector('.tweede_knop');
eersteKnop.addEventListener('click', updateBalk);
eersteKnop.addEventListener('click', sleepeevee);
eersteKnop.addEventListener('click', sleeping);

var eersteKnop = document.querySelector('.derde_knop');
eersteKnop.addEventListener('click', updateBalk);
eersteKnop.addEventListener('click', playeevee);
eersteKnop.addEventListener('click', barking);





var eventesten = document.querySelector("#evolvebuttonid");
eventesten.addEventListener('click', updateBalk) 
/* Als je op de button klikt van evolve, evolved hij naar eevee. Hierdoor wordt 
de welkeEvolutie 1 en speelt hij regel 60 af met opnieuw de funtie updateBalk op regel 7*/
console.log(eventesten);
if (balkStatus == 100) {
    eventesten.removeAttribute("disabled")
};



