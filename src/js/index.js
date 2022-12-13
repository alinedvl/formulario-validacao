
const btn = document.getElementById("btn-enviar"); 
const inputs = document.querySelectorAll(".campos-form");
const mensagens = document.querySelectorAll(".mensagem");

btn.addEventListener("click", function(){
    inputs.forEach(function(input, index){
        if(input.value == ""){
            input.classList.add("borda-vazia");
            mensagens[index].classList.add("ativa");
        } else if(input.value !== "") {
            mensagens[index].classList.remove("ativa");
            input.classList.add("borda-completa");
        }
    })

});
