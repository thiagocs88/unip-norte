function teste(){
    alert("Hello world!");
}


document.getElementById("paragrafo").innerHTML = "Esse parágrafo foi escrito com JavaScript.";

function nao_clique(){
    document.getElementById("par2").innerHTML = "Poxa, cara... Falei pra não clicar ali!";
}

function apertar(){
    document.getElementById("magico").style.color = "red";
}

function soltar(){
    document.getElementById("magico").style.color = "blue";
}

function altera_estilos(){
    document.getElementById("estilos").style.fontSize = "4em";
    document.getElementById("estilos").style.color = "green";
    document.getElementById("estilos").style.backgroundColor = "yellow";
}

function somar(){
    document.getElementById("resultado").value = parseFloat(document.getElementById("numero1").value) + parseFloat(document.getElementById("numero2").value);

    document.getElementById("resultado").style.color = "red";
}