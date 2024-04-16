var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",
    price: function(){
        values = Object.values(services); 
        
        let sum = 0;
                for (let value of values) {
                console.log(value);
                if (typeof value != 'function') {
                    sum += parseFloat(value);
                }
            
            }
        console.log ("Сумма послуг", sum)

    } ,
    maxPrice: function(){
        values = Object.values(services); 
        let max = 0; 
        for (let value of values) {
            value = parseFloat(value);
            if ((typeof value != 'function') && (value > max))
             
             {
                max = value ;              
             }
        
        }
        console.log ("максимальна вартість",max)

    },
    minPrice: function(){
        values = Object.values(services); 
        let min = parseFloat(values[0]);; 
        for (let value of values) {
            value = parseFloat(value);
            if ((typeof value != 'function') && (value < min))
             
             {
                min = value ;              
             }
        
        }
        console.log ("мінімальна вартість",min)

    }       
    };
    services['new'] = '20 грн';
    services.price();
    services.maxPrice();
    services.minPrice();