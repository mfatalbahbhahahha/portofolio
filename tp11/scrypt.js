function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la duxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici a moyenne : " + moyenne + "<br>");

    if(moyenne <10) {
        document.write("Vous n'êtes pas admis");
    }
    else{
        document.write("Vous êtes admis");
    }
}

function test_age() {
    let age = prompt("Quelle est votre age ?")
    if (age<18) {
        document.write("Vous êtes mineur");
        document.bgColor="red"
    }
    else{
        document.write("Vous êtes majeur");
        document.bgColor="green"
    }
}

function simple_affichage(){
    let name = prompt("Donner votre nom");
    let prenom = prompt("Donner votre prenom");

    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
    document.write('Bonjour ' + prenom + " " + name);
    document.write('</div>');
}

function test_couleur(){
    let couleur =prompt("Donner une couleur")
    if (couleur == "rouge" || couleur =="red"){
        document.body.style.backgroundColor = "red"
    }
    else if (couleur == "bleu" || couleur == "Blue"){
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "vert" || couleur == "green"){
        document.body.style.backgroundColor = "green"
    }
    else if (couleur == "rose" || couleur == "pink"){
        document.body.style.backgroundColor = "pink"
    }
    else{
        document.write("Couleur non comprise")
    }
}