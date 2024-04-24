var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test1.te_st@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function newArr(arr){
     
    const email = [];
    for (let i = 0; i < arr.length; i++) {

        const elem = arr[i];
        const item = elem.email;

        var pattern1 = /\w@gmail\.com/;
        var pattern2 = /\w@yahoo\.com/;

        if (item.match(pattern1) || item.match(pattern2)) {
        email.push(item)}        
      }      
      
      console.log(email) ;    
    } 

newArr(arr);

