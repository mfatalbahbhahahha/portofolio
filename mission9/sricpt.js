
function testqcm() {
    let score = 0;
    
    
    if (document.querySelector('input[name="q1"][value="b"]').checked) {
        score++;
    }
    
    
    
    if (document.querySelector('input[name="q2"][value="a"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q3"][value="c"]').checked) {
        score++;
    }
   
    var q4a = document.getElementById('q4a').checked;  
    var q4b = document.getElementById('q4b').checked; 
    var q4c = document.getElementById('q4c').checked;

    
    if (q4a == true && q4c == true && q4b == false) {
        score++;
    }

    if (document.querySelector('input[name="q5"][value="b"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q6"][value="c"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q7"][value="a"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q8"][value="b"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q9"][value="c"]').checked) {
        score++;
    }

    if (document.querySelector('input[name="q10"][value="c"]').checked) {
        score++;
    }

    alert("Votre score est de : " + score + "/10"); 

    
}


function ouvrirCorrige() {
    window.open("correction.html", "FenetreCorrige", "width=600,height=600");
}





function effacerReponses() {
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    
    inputs.forEach(element => {
        element.checked = false;
    });
    const resultatDiv = document.getElementById('resultat');
    if (resultatDiv) {
        resultatDiv.innerHTML = "";
        resultatDiv.className = "";
    }
}