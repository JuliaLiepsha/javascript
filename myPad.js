    let str = 'text';
    let numOfSymbol = 5;
    let startOrEnd = !true; 
    let symbol = '*';
    function pad(str, symbol, numOfSymbol,startOrEnd) { 
        if (str.length >= numOfSymbol){
        console.log (str);
        }
        else if (startOrEnd){
            str = symbol.repeat(numOfSymbol-str.length) + str;
            console.log(str) ;
        }
        else {
            str = str + symbol.repeat(numOfSymbol-str.length);
            console.log(str) ;
        }
        }        
    pad(str, symbol, numOfSymbol,startOrEnd);
     
