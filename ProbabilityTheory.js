let count = 10;
let number1 = number2 = 0;    
    function checkProbabilityTheory(count) {     
        for (let i = 1; i <= count; i++) {
            z = Math.random() * 1000;
            z = Math.round(z);
            console.log(z);   
            if (z % 2) {
            number1 = number1+1;
            }      
            else {
            number2 = number2+1;
            }                
           }         
        }        
checkProbabilityTheory(count);
procent2 = Math.round(number2 / (number2 + number1) *100);
procent1 = 100-procent2;
console.log(' Кількість згенерованих чисел:',count,'\n кількість парних чисел: ',number2,'\n кількість не парних чисел: ',number1,'\n співвідношення парних до не парних: ',procent2+'% / ',procent1+'%'); 



