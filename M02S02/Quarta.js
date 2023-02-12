// for(var i = 1; i<=10; i++){
//     if(i%2 == 0){
//         document.write(i+'<br>');
//     }
// }

var i = 0;
var array =[];
while(i<=10){
    if(i%2 != 0){
        array.push(i)
    }
    i++
}
console.log(array);