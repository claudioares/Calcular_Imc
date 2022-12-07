const button = document.querySelector("#button");



button.addEventListener("click", function(event){
    event.preventDefault(event);
    
    
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc;
    
    
    if(!peso || !altura){
        console.log('Preencha todos os dados!')
    }
    
    imc = peso / (altura * altura);
    imc = imc.toFixed(2)
    
    let imc_result = document.querySelector(".imc_result_p").textContent = imc;
    console.log(imc)

})