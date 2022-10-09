let Bday=document.querySelector("#in");
let luckyNumber=document.querySelector("#lucky");
let checkB=document.querySelector("#check");
let resultEl=document.querySelector("#result");

// this function removes hyphen, calculate sum by typecasting CharAt
function calculateSum(x){
    let dob=x.replaceAll("-","");
    console.log(dob)

    let sum=0;
    for (let i=0; i<dob.length; i++){
        sum+= Number(dob.charAt(i));
    }
            return sum

}

function checkIfLuckyNumber(){

    

    let number=Bday.value;
    let sum= calculateSum(number)

    if (sum && luckyNumber.value >0){
        
        if(sum%luckyNumber.value===0){
            resultEl.innerText="Lucky😇"
        }else{
            resultEl.innerText="not lucky😭"
        }

    }else{
            resultEl.innerText="Pls fill both the values and make sure the lucky number is more than Zero"
    }

}

checkB.addEventListener("click", checkIfLuckyNumber)