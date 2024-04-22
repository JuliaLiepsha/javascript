arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    let counter = arr.length; 

     while (counter > 0) {
        
        let index = Math.floor(Math.random() * counter);
        //console.log(index);
        counter--;

        let temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
}
myBlend(arr);
console.log (arr);