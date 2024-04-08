var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн"       
    };
    const values = Object.values(services); 
    function  price(){
        let sum = 0;
        for (var i in values) {
              values[i] = Number.parseFloat (values[i]);
              sum = sum + values[i]                
        }
        console.log ("Сумма послуг", sum)
    }

    function  minPrice() {
        let min = values[0]; 
        for  (var i in values) {
            values[i] = Number.parseFloat (values[i]);
            if (values[i] < min) {
                min = values[i]                
            }            
        }
        console.log ("мінімальна вартість", min)
    }

    function  maxPrice() {
            let max = values[0]; 
        for  (var i in values) { 
            values[i] = Number.parseFloat (values[i]);    
            if (values[i] > max) {
                max = values[i]                
            }
        }
        console.log ("максимальна вартість",max)
    };
    price ();
    minPrice ();
    maxPrice(); 