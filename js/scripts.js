const button = document.querySelector("#button");
const buttonClear = document.querySelector(".clear");
const height = document.querySelector("#altura");



altura.addEventListener('keypress', ()=>{

    let inputLength = height.value.length

    if(inputLength === 1) height.value += '.'

})




button.addEventListener("click", function(event){
    event.preventDefault(event);
    
    
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let span_error = document.querySelector("#span_error");
    let imc;

    
    if(!peso || !altura){

        span_error.classList.remove('inative')
        span_error.classList.add('active')

        setTimeout(()=>{
            span_error.classList.remove('active')
            span_error.classList.add('inative')
        }, 2000)
        
        return;
    }
    
    imc = peso / (altura * altura);
    imc = imc.toFixed(2)
    
    document.querySelector(".imc_result_p").textContent = imc;
   
    
    buttonClear.addEventListener("click"), (e) => {
        event.preventDefault(e)
        document.querySelector("#peso").value = '';
        document.querySelector("#altura").value = '';
        document.querySelector(".imc_result_p").textContent = '';
    }

})