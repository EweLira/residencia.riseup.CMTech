var titulo = document.querySelector("h1").innerHTML;
var descricao = document.querySelector("#descricao").innerHTML;
var listaItens = document.querySelectorAll(".itens");
var lista = document.querySelector("#lista");
var listaFrutas = document.querySelector("#frutas");
var quadrados = document.querySelector("#quadrados");
let frutas =["Maçã","Banana","Uva","Abacaxi"];

listaItens[2].innerHTML = "Caju";
alert("Terceiro elemento mudou");


lista.innerHTML="<li>Chocolate</li>"
lista.innerHTML+="<li>Bolo</li>"

quadrados.innerHTML = "<div id='q1' style='background-color: red;width: 100px;height: 100px'></div>"
quadrados.innerHTML += "<div id='q2' style='background-color: blue;width: 200px;height: 200px; margin-top: 10px' ></div>"

for(i = 0;i < frutas.length;i++){
    listaFrutas.innerHTML += "<li>"+frutas[i]+"</li>"
}
