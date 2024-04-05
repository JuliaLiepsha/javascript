    
    function myIsNaN(arg) {      
    if ((typeof(arg) === 'string') || (typeof(arg) === 'undefined') || (!arg) || (arg === +-Infinity)) {
        return true; 
    }
    else return false;
}   
    //let arg = '70'*18 + 7;
    //let arg = 0.0000000000000078
    //let arg = typeof(NaN);
    //let arg = '***'*18 + 7;
    //let arg = NaN;
    //let arg;
    //let arg = -5/0;
    //let arg = '';
    console.log(myIsNaN(arg), arg);
