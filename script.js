/* JavaScript code here */
//document.getElementById("demo").innerHTML = 5 + 6;
console.log("EXTERNAL SCRIPt");


function sumArray(arr){
    var sum = 0;
    arr.forEach(function(value, index){
        sum = sum+value;
    });
    return sum;
}

var Sarr = [1, 2, 3, 5,  4, 10];

console.log(sumArray(Sarr));

