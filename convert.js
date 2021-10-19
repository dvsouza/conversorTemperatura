var temperaturaInformada = document.getElementById("insere-temperatura");
var novaTemperatura = document.querySelector(".resultado");

function getSelectValue(){
    var selectValue = document.getElementById("seleciona-temperatura").value;
    return selectValue;
}

function calculaConversao(temperatura){
    if (getSelectValue() == 'fahrenheit') {
        var fahrenheit = temperatura.value * 1.8 + 32;
        return fahrenheit;
    } else {
        var celsius = (temperatura.value - 32) / 1.8;
        return celsius
    }
}

function insereNaTela(){
    var retornoTela = "A temperatura em " + getSelectValue() + " é de " + calculaConversao(temperaturaInformada);
    novaTemperatura.innerHTML = retornoTela;
    return novaTemperatura;
}

function botaoConversor(){
    event.preventDefault();
    var validaValor = temperaturaInformada.value;
    if (validaValor | getSelectValue()) {
        insereNaTela();
    } else {
        novaTemperatura.innerHTML = "Selecione uma temperatura ou insira uma temperatura"
    }

    console.log(getSelectValue());
    
}

