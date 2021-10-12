// var botaoConversor = document.querySelector(".converte");
var temperaturaInformada = document.querySelector("#insere-temperatura");
var selectValue = null;
var fahrenheit = null;

function getSelectValue(){
    selectValue = document.getElementById("seleciona-temperatura").value;
    return selectValue;
}

function calculaConversao(temperatura){
        fahrenheit = temperatura.value * 1.8 + 32;
        return fahrenheit;
}

function criaElemento(){
    var divResultado = document.querySelector(".valorConvertido");
    var resultadoConvertido = document.createElement("p");
    resultadoConvertido.setAttribute("class", "resultado");
    var elementoResultado = divResultado.appendChild(resultadoConvertido);
    return elementoResultado;
}

function insereNaTela(){
    var retornoTela = "A temperatura em " + selectValue + " é de " + calculaConversao(temperaturaInformada);
    var novaTemperatura = criaElemento();
    novaTemperatura.innerHTML = retornoTela;
}


// botaoConversor.addEventListener("click", function(event){
//     event.preventDefault();
//     insereNaTela();
// })

function botaoConversor(){
    event.preventDefault();
    insereNaTela();
}

