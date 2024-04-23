let str1 = "Nothing absolutely asbent 0123654 Антропология антагонизма";
var regex = /[^A|a|А|а]{6,}/g;
var matches = str1.match(regex);
console.log(matches) 