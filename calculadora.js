function init(){
    var resultado = document.getElementById('resultado');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }

}
