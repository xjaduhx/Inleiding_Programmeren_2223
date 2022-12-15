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
            eeveePlaatje.src = "./images/sylveon.jpeg";
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
        }
    }
}
function handleSubmit(){
    console.log('hallo');
}
function barking(){
    document.getElementById('barking').play();
}

function sleepeevee(){
    eeveePlaatje.src = "./images/eeveesleep.PNG";
}

function feedeevee(){
    eeveePlaatje.src = "./images/eeveefood.PNG";
}

function playeevee(){
    eeveePlaatje.src = "./images/eeveeplay.PNG";
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
buttonDing.addEventListener("click", randomPlaatje);

function randomPlaatje(){
    var imageChange = ['./images/voetbal.png', './images/champagne.png', './images/sylveon.jpeg'];
    var randomIndex = Math.floor(Math.random()*3);
    document.querySelector('.speelgoedje').src = imageChange[randomIndex];
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



