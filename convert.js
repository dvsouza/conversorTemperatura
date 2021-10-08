var botaoConversor = document.querySelector(".converte");
var temperaturaSelecionada = document.querySelector("#seleciona-temperatura").value;



botaoConversor.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Fui Clicado!")
    console.log(temperaturaSelecionada)
})