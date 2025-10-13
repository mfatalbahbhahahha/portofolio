function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme / 3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    } else if (moyenne <= 12) {
        document.write("Admis-Passables");
    } else if (moyenne < 14) {
        document.write("Admis-Bien");
    } else {
        document.write("Admis-Très Bien");
    }
    document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
}



function test_temp(){
    var n1 = prompt("Donner la températre :");
    var temp = Number(n1);

    if(temp <10){
    document.write("La température est froide")}
    else{ if(temp <=25)
        document.write("La température est normale")
        else{ if(temp >=25)
        document.write("La température est chaude")
    }
        
    }
    document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
}


function comparaison_nombre() {
    var n1 = prompt("Donner un nombre.");
    var n2 = prompt("Donner un autre nombre.");
    
    if (n1<n2) {
    document.write(n1 + " < " + n2); }
    
    else if (n2<n1) {
    document.write(n2 + " < " + n1);
    
    }
    else { (n1=n2)
    
    document.write(n1 + " = " +n2);
    
    }
    document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
    }
    
