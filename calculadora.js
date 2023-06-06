var resultado = document.getElementById('resultado');    
let caracteres = document.getElementsByClassName('caracter');

class Calculadora{
    Calculadora(expresion){
        
    }
}

function init(){
    for (let i = 0; i < caracteres.length; i++) {
        caracteres[i].addEventListener('click',(e) =>{
            resultado.value = resultado.value + caracteres[i].textContent;
        });
    }
}