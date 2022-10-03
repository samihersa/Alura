function criptar (){
    var texto = document.querySelector("#input-texto").value;
    var cifrar = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-salida").value = cifrar;
    document.querySelector("#input-texto").value;

}

var boton1 = document.querySelector("#btn-criptar");
boton1.onclick = criptar;

function descriptar (){
    var texto = document.querySelector("#input-texto").value;
    var cifrar = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-salida").value = cifrar;
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-descriptar");
boton2.onclick = descriptar;

document.getElementById("btn-copy").onclick = function() {    
    copytext.textContent = document.getElementById(".text-salida").value;
 
    document.body.appendChild(copytext);
    copyTextarea.select();
    document.execCommand('btn-copy');
    document.body.removeChild(copytext);
}
