console.log("commencement du recit");

var anne = prompt ("En quel année voulez vous que l'histoire commence ?\nNe mettez que le chiffre de l'année !");
var heros = prompt ("Quel nom voulez vous que votre heros porte ?");
var age = prompt ("Quel age voulez vous que votre heros ai ?\nMettez votre age en chiffre !");
if(Number(age)<18)
alert("Vous devez etre majeur pour lire cette histoire !");
var ville = prompt ("De quel ville viens votre heros ?");
var auberge = prompt ("Quel est le nom de l'auberge ?\nLe nom doit etre entre des guillemets !");
var boisson = prompt ("Quel boisson choissisez vous ?");
if(boisson == "biere")
alert("alcoolique ! ");
var end = prompt ("Que voulez que fasse votre heros a la fin ?");






var recit = "<br>Mon histoire commence en l'an <span>"+anne+"</span> .</br>" ;
 recit += "<br>Je m'appele <span>"+heros+"</span> j'ai <span>"+age+"</span> ans ." ;
 recit += "Je viens de <span>"+ville+"</span> une ville situé dans le nord de la france .</br>";
 recit += "<br>J'exerce la profession de voleur .</br>";
 recit += "<br>Comme tout les jours aprés que le soleil se couche , je choisi une cible a qui faire les poches .</br>";
 recit += "<br>Mon crime commis , je rentre chez moi en comptant ce que j'avais pu lui soutirer .<br>";
 recit += "<br>C'est a ce moment qu'apparu la police .</br>";
 recit += "<br>plusieur choix s'offrit a moi je pris la ruelle de droite .</br>";
 recit += "<br>Reussisant à m'ecchaper de justesse  je décida de me faire tout petit en rentrant dans l'auberge "+auberge+" .</br>";
 recit += "<br>Je m'installa prés d'une fenetre et commanda <span>"+boisson+"</span> .</br>";
 recit += "<br>Quelque minutes plus tard je les regarda passe devant la fenetre de la taverne .</br>";
 recit += "<br>La suite de l'aventure dans le prochaine challenge !</br>";


console.log(recit);
console.log("The end ils vécurent heureux ect ...")


document.getElementById("start").innerHTML=recit;
