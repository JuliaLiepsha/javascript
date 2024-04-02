function pow (x, y) {
let z = x;
    
    if (y === 0)
    z = 1;
    else {
    for (let i = 1; i < y; i++) {
    z = z*x;
    }    
    }
    return z;
}
//console.log (pow (-325,3));
