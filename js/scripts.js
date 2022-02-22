const button = document.querySelector("#button");

button.addEventListener("click", function(event){
    event.preventDefault(event);

    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const imc = document.querySelector("#imc");
    

    if(peso !== '' && altura !==''){
        const calculaImc = peso / altura * altura;
        imc.textContent = calculaImc;
    } else{
        imc.textContent = "Preencha todos os campos!!";
    }

})