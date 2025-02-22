const adviceId = document.querySelector(".advice-id")
const advice = document.querySelector(".advice-description")
const button = document.querySelector(".advice-update")

async function getAdvice(){
    try{
        const response = await fetch("https://api.adviceslip.com/advice")
        
        if(!response.ok){
            throw new error("Ocorreu um erro ao tentar buscar as informações da API")
        }

        const adviceContent = await response.json()
        console.log(adviceContent);
        adviceId.innerText = `ADVICE #${adviceContent.slip.id}`
        advice.innerText = `"${adviceContent.slip.advice}"`
    }
    
    catch(error){
        console.error("Erro ao tenrar buscar as informações da API");
    }

    console.log(adviceContent);
    
    
}

button.addEventListener("click", getAdvice)
getAdvice()