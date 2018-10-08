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


function checkEmail(emailStirng){
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailStirng);
    return match;
}

//console.log(checkEmail("gogo@hon.com"));
//console.log(checkEmail("gg@gmail.com"));

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus(index){
    console.log("Idi Nahui " + index);
    return library[index].readingStatus;
}

console.log(getReadingStatus(2));
console.log(getReadingStatus(1));
console.log(getReadingStatus(0));