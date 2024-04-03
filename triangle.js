    let x = 5;
    let y = '*'; 
    function triangle (x,y) {       
        for (let i = 1; i <= x; i++) {
            console.log(y);
            y = y + '*';
            }
        }        
    triangle (x,y);
    return (x,y);

/*  let x = 5;
    let y = '*'; 
    function triangle (x,y) {       
        while (y.length <= x) {
            console.log(y);
            y = y + '*';

            }
        }        
    triangle (x,y);
    return (x,y);      */